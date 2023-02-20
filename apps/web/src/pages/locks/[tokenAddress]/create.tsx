import { useRouter } from 'next/router'
import { CreateLock } from '../../../views/Locks'

const TokenLocksOverviewPage: React.FC = () => {
  const { tokenAddress } = useRouter().query
  if (!tokenAddress) return null
  return <CreateLock tokenAddress={String(tokenAddress)} />
}

export default TokenLocksOverviewPage
