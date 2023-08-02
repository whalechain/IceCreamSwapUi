import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider } from '@pancakeswap/smart-router/evm'
import { CHAINS } from 'config/chains'
import { createPublicClient, http } from 'viem'

const clients = CHAINS.reduce((prev, cur) => {
  return {
    ...prev,
    [cur.id]: createPublicClient({
      chain: cur,
      transport: http(cur.rpcUrls.default.http[0]),
    }),
  }
}, {} as Record<ChainId, ReturnType<typeof createPublicClient>>)

// @ts-ignore
export const viemClients: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  return clients[chainId]
}
