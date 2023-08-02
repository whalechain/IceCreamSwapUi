import { ChainId } from '@pancakeswap/sdk'
import { OnChainProvider } from '@pancakeswap/smart-router/evm'
import { CHAINS } from 'config/chains'
import { createPublicClient, http, fallback, PublicClient } from 'viem'

const clients = CHAINS.reduce((prev, cur) => {
  const rpcs = cur.rpcUrls.public.http
  const isSingle = rpcs.length === 1
  const transport = isSingle
    ? http(rpcs[0], {
        timeout: 15_000,
      })
    : fallback(
      rpcs.map((url) =>
          http(url, {
            timeout: 15_000,
          }),
        ),
        {
          rank: false,
        },
      )
  return {
    ...prev,
    [cur.id]: createPublicClient({
      chain: cur,
      transport,
    }),
  }
}, {} as Record<ChainId, PublicClient>)

// @ts-ignore
export const viemClients: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  return clients[chainId]
}
