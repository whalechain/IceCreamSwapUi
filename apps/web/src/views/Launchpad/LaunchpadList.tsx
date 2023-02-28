import { Flex } from '@pancakeswap/uikit'
import AppWrapper from 'components/AppWrapper'
import LaunchpadCard from './components/LaunchpadCard'
import { Launchpad } from './types/Launchpad'

interface LaunchpadListProps {
  launchpads: Launchpad[]
}

const LaunchpadList: React.FC<LaunchpadListProps> = (props) => {
  const { launchpads } = props
  return (
    <AppWrapper title="Current Presales" subtitle="Be the first investing">
      <Flex flexDirection="column">
        {launchpads.map((launchpad) => (
          <LaunchpadCard key={launchpad.id} launchpad={launchpad} />
        ))}
      </Flex>
    </AppWrapper>
  )
}

export default LaunchpadList
