import { useRouter } from 'next/router'
import { LockOverview } from '../../../views/Locks'

const LocksOverviewPage: React.FC = () => {
  const { lockId } = useRouter().query
  if (!lockId) return null
  return <LockOverview lockId={Number(lockId)} />
}

export default LocksOverviewPage
