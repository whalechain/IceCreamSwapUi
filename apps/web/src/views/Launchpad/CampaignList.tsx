import { Grid, Heading, PageHeader } from '@pancakeswap/uikit'
import Page from 'components/Layout/Page'
import styled from 'styled-components'
import LaunchpadCard from './components/LaunchpadCard'
import { useCampaigns } from './hooks'

const H1 = styled(Heading)`
  font-size: 32px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 64px;
    margin-bottom: 24px;
  }
`
const H2 = styled(Heading)`
  font-size: 16px;
  margin-bottom: 8px;
  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 24px;
    margin-bottom: 18px;
  }
`

const LaunchpadList: React.FC = () => {
  const campaigns = useCampaigns({})

  return (
    <>
      <PageHeader>
        <H1 as="h1" color="secondary" scale="xxl">
          Launchpad
        </H1>
        <H2>Be the first investing in new Projects</H2>
      </PageHeader>
      <Page>
        {campaigns.data?.length > 0 && (
          <Grid gridGap="32px" gridTemplateColumns={['1fr', null, null, 'repeat(2, 1fr)', 'repeat(3, 1fr)']}>
            {campaigns.data.map((launchpad) => (
              <LaunchpadCard key={launchpad.id} launchpad={launchpad} />
            ))}
          </Grid>
        )}
      </Page>
    </>
  )
}

export default LaunchpadList
