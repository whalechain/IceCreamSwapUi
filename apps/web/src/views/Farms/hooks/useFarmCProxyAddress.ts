import useSWR from 'swr'
import { ChainId } from '@pancakeswap/sdk'
import { fetchCProxyAddress } from 'state/farms/fetchFarmUser'
import { farmFetcher } from 'state/farms'

export const useFarmCProxyAddress = (account?: string, chainId?: number) => {
  const { data } = useSWR(account && chainId && ['cProxyAddress', account, chainId], async () =>
    fetchCProxyAddress(account, chainId),
  )

  return {
    cProxyAddress: data,
  }
}
