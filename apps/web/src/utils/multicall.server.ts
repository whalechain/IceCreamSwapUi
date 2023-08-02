import { CallOverrides } from 'ethers'
import { createMulticall, Call } from '@pancakeswap/multicall'
import { CHAINS } from 'config/chains'
import { configureChains } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      return { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export type { Call }

export interface MulticallOptions extends CallOverrides {
  requireSuccess?: boolean
}

const { multicall, multicallv2, multicallv3 } = createMulticall(provider)

export default multicall

export { multicallv2, multicallv3 }
