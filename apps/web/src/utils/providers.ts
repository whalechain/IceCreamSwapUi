import { StaticJsonRpcProvider } from '@ethersproject/providers'
import { ChainId } from '@pancakeswap/sdk'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://bsc.nodereal.io'

export const BITGERT_PROD_NODE = 'https://rpc.icecreamswap.com'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const bitgertRpcProvider = new StaticJsonRpcProvider(BITGERT_PROD_NODE)

export const polygonRpcProvider = new StaticJsonRpcProvider(
  {
    url: 'https://polygon-rpc.com/',
    skipFetchSetup: true,
  },
  137,
)
