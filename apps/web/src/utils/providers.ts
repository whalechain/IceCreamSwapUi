import { createPublicClient, http } from 'viem'
import { bsc, polygon, bitgert } from 'viem/chains'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const BITGERT_PROD_NODE = 'https://rpc.icecreamswap.com'

export const bscRpcProvider = createPublicClient({
  transport: http(BSC_PROD_NODE),
  chain: bsc,
})

export const bitgertRpcProvider = createPublicClient({
  transport: http(BITGERT_PROD_NODE),
  chain: bitgert,
})

export const polygonRpcProvider = createPublicClient({
  transport: http(),
  chain: polygon,
})
