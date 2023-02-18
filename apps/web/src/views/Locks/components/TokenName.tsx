import { useTokenContract } from 'hooks/useContract'
import useSWR from 'swr'

const TokenName: React.FC<{ address: string }> = ({ address }) => {
  const token = useTokenContract(address)
  const name = useSWR(`${address}name`, () => token?.name())

  return <>{name.data || '???'}</>
}

export default TokenName
