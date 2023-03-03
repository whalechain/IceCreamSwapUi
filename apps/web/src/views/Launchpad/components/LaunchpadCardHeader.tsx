import { Flex, Heading, TokenImage } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/Logo'
import { useToken } from 'hooks/Tokens'
import styled from 'styled-components'
import { Launchpad } from '../types/Launchpad'
import { LaunchpadTags } from './Tags'

const Wrapper = styled(Flex)`
  svg {
    margin-right: 4px;
  }
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`
interface LaunchpadCardHeaderProps {
  launchpad: Launchpad
}

const LaunchpadCardHeader: React.FC<LaunchpadCardHeaderProps> = (props) => {
  const { launchpad } = props
  const token = useToken(launchpad.address)

  return (
    <Wrapper>
      <CurrencyLogo currency={token} size="60px" />
      <Flex flexDirection="column" alignItems="flex-end" gap="4px">
        <Heading>{token?.name}</Heading>
        <Flex justifyContent="center">
          <LaunchpadTags.Kyc />
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default LaunchpadCardHeader
