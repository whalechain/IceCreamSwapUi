import { Button, Card, Flex, Link, Progress, Text } from '@pancakeswap/uikit'
import styled from 'styled-components'
import { Campaign } from '../types/Launchpad'
import LaunchpadCardHeader from './LaunchpadCardHeader'

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
  launchpad: Campaign
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = (props) => {
  const { launchpad } = props
  return (
    <StyledCard>
      <LaunchpadCardInnerContainer>
        <LaunchpadCardHeader launchpad={launchpad} />
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px" color="secondary" fontWeight="bold">
            {launchpad.price}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px" fontWeight="bold">
            Progress ({Math.round((launchpad.sold / launchpad.total) * 10000) / 100}%)
          </Text>
        </Flex>
        <Progress primaryStep={(launchpad.sold / launchpad.total) * 100} />
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px">Liquidity</Text>
          <Text fontSize="16px">{launchpad.liquidity}%</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="16px">Lockup Time</Text>
          <Text fontSize="16px">{launchpad.lockupTime} Days</Text>
        </Flex>
        <Button>Buy now</Button>
      </LaunchpadCardInnerContainer>
      <ExpandingWrapper>
        <Link fontSize="16px" color="primary" href="/launchpad/blub">
          Details
        </Link>
      </ExpandingWrapper>
    </StyledCard>
  )
}

export default LaunchpadCard
