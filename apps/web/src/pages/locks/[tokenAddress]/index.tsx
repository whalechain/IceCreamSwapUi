import { useRouter } from 'next/router'
import { TokenLocksOverview } from '../../../views/Locks'

const TokenLocksOverviewPage: React.FC = () => {
  const { tokenAddress } = useRouter().query
  if (!tokenAddress) return null
  return <TokenLocksOverview tokenAddress={String(tokenAddress)} />
}

export default TokenLocksOverviewPage
