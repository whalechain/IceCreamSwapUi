import { Flex, Heading, TokenImage } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/Logo'
import { useToken } from 'hooks/Tokens'
import styled from 'styled-components'
import { CampaignData } from '../hooks'
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
  campaign: CampaignData
}

const LaunchpadCardHeader: React.FC<LaunchpadCardHeaderProps> = (props) => {
  const { campaign } = props
  const token = useToken(campaign?.tokenAddress)

  return (
    <Wrapper>
      <CurrencyLogo currency={token} size="60px" />
      <Flex flexDirection="column" alignItems="flex-end" gap="4px">
        <Heading>{token?.name}</Heading>
        <Flex justifyContent="center">
          {campaign.tags.map((tag) => {
            const Tag = LaunchpadTags[tag]
            return <Tag key={tag} />
          })}
        </Flex>
      </Flex>
    </Wrapper>
  )
}

export default LaunchpadCardHeader
