import { Button, Card, Flex, Link, Progress, Text, useModal } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { useToken } from 'hooks/Tokens'
import { CampaignData, useGivenAmount } from '../hooks'
import LaunchpadCardHeader from './LaunchpadCardHeader'
import BuyModal from './BuyModal'
import { renderDate } from 'views/Locks/utils'
import { useAccount } from 'wagmi'
import { utils } from 'ethers'
import ConnectWalletButton from 'components/ConnectWalletButton'

const StyledCard = styled(Card)`
  align-self: baseline;
  max-width: 100%;
  margin: 0 0 24px 0;
  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 350px;
    margin: 0 12px 46px;
  }
`

const LaunchpadCardInnerContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  padding: 24px;
  gap: 0.75em;
`

const ExpandingWrapper = styled(Flex)`
  padding: 24px;
  border-top: 2px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
  justify-content: center;
`
interface LaunchpadCardProps {
  launchpad: CampaignData
}

const roundString = (str: string) => {
  const [whole, decimal] = str.split('.')
  if (!decimal) return whole
  return `${whole}.${decimal.slice(0, 2)}`
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = (props) => {
  const { launchpad } = props
  const token = useToken(launchpad?.tokenAddress)
  console.log(launchpad)
  const [onPresentBuyModal] = useModal(<BuyModal campaign={launchpad} />, true, true, `buyModal-${launchpad.id}`)
  const started = new Date(launchpad.start_date.toNumber() * 1000) < new Date()
  const ended = new Date(launchpad.end_date.toNumber() * 1000) < new Date()
  const { address, status } = useAccount()

  const contributed = useGivenAmount(launchpad.address, address)
  return (
    <StyledCard>
      <LaunchpadCardInnerContainer>
        <LaunchpadCardHeader campaign={launchpad} />
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px" color="secondary" fontWeight="bold">
            {(launchpad.rate.toNumber() / 10 ** 18).toFixed(3)} CORE per {token?.symbol}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px" fontWeight="bold">
            Progress (
            {roundString(`${(Number(launchpad.collected.toString()) / Number(launchpad.softCap.toString())) * 100}`)}%)
          </Text>
        </Flex>
        <Progress primaryStep={(Number(launchpad.collected.toString()) / Number(launchpad.softCap.toString())) * 100} />
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px">Liquidity</Text>
          <Text fontSize="16px">{launchpad.liquidity_rate.toNumber() / 100}%</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px">Lockup Time</Text>
          <Text fontSize="16px">{launchpad.lock_duration.toNumber() / 60 / 60 / 24} Days</Text>
        </Flex>
        {contributed.data && (
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="16px">Contributed</Text>
            <Text fontSize="16px">{utils.formatUnits(contributed.data, 18)} CORE</Text>
          </Flex>
        )}
        {started && !ended && (
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="16px">Ending at</Text>
            <Text fontSize="16px">{renderDate(launchpad.end_date.mul(1000).toNumber())}</Text>
          </Flex>
        )}
        {started ? (
          !ended ? (
            status === 'connected' ? (
              <Button onClick={onPresentBuyModal}>Buy now</Button>
            ) : (
              <ConnectWalletButton />
            )
          ) : (
            <Button disabled>Sale Ended</Button>
          )
        ) : (
          <Button disabled>Starting at {renderDate(launchpad.start_date.mul(1000).toNumber())}</Button>
        )}
      </LaunchpadCardInnerContainer>
      <ExpandingWrapper>
        <Link fontSize="16px" color="primary" href={`/launchpad/${launchpad.id}`}>
          Details
        </Link>
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default LaunchpadCard
