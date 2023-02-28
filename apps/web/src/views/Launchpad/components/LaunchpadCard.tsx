import { Launchpad } from '../types/Launchpad'

interface LaunchpadCardProps {
  launchpad: Launchpad
}

const LaunchpadCard: React.FC<LaunchpadCardProps> = (props) => {
  const { launchpad } = props
  return (
    <div>
      <h1>{launchpad.id}</h1>
    </div>
  )
}

export default LaunchpadCard
