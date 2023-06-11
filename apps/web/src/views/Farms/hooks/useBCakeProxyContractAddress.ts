import useSWRImmutable from 'swr/immutable'
import { NO_PROXY_CONTRACT } from 'config/constants'
import { useBCakeFarmBoosterContract } from 'hooks/useContract'

export const useBCakeProxyContractAddress = (account?: string, _chainId?: number) => {
  const bCakeFarmBoosterContract = useBCakeFarmBoosterContract()
  const { data, mutate } = useSWRImmutable(
    account && ['bProxyAddress', account, chainId],
    async () => bCakeFarmBoosterContract.proxyContract(account),
  )
  const isLoading = false

  return {
    proxyAddress: data,
    isLoading,
    proxyCreated: data && data !== NO_PROXY_CONTRACT,
    refreshProxyAddress: mutate,
  }
}
