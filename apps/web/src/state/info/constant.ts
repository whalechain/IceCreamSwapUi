import { infoStableSwapClient } from "utils/graphql"
import {
  INFO_CLIENT_BITGERT,
  BLOCKS_CLIENT_BITGERT,
  INFO_CLIENT_XDC,
  INFO_CLIENT_CORE,
  BLOCKS_CLIENT_XDC,
  BLOCKS_CLIENT_CORE,
  INFO_CLIENT_SCROLL,
  BLOCKS_CLIENT_SCROLL,
  INFO_CLIENT_TELOS,
  INFO_CLIENT_BASE,
  INFO_CLIENT_SHIMMER,
  BLOCKS_CLIENT_TELOS,
  BLOCKS_CLIENT_BASE, BLOCKS_CLIENT_SHIMMER
} from "config/constants/endpoints";
import { ChainId } from '@pancakeswap/sdk'
import {
  PCS_BITGERT_START,
  PCS_CORE_START,
  PCS_SCROLL_START,
  PCS_XDC_START,
  PCS_TELOS_START,
  PCS_BASE_START,
  PCS_SHIMMER_START,
} from "config/constants/info";
import { GraphQLClient } from 'graphql-request'
import { chains } from '@icecreamswap/constants'

export type MultiChainName = 'BITGERT' | 'DOGECHAIN' | 'DOKEN' | 'FUSE' | 'XDC' | 'BSC' | 'CORE' | 'XODEX' | 'SCROLL' | 'TELOS' | 'BASE' | 'SHIMMER' | 'SHARDEUM_TESTNET' | 'SHIMMER_TESTNET'
export type MultiChainNameExtend = MultiChainName

export const multiChainQueryMainToken = {
  BITGERT: 'ETH',
  XDC: 'ETH',
  CORE: 'ETH',
  SCROLL: 'ETH',
  TELOS: 'ETH',
  BASE: 'ETH',
  SHIMMER: 'ETH',
}

export const multiChainBlocksClient = {
  BITGERT: BLOCKS_CLIENT_BITGERT,
  XDC: BLOCKS_CLIENT_XDC,
  CORE: BLOCKS_CLIENT_CORE,
  SCROLL: BLOCKS_CLIENT_SCROLL,
  TELOS: BLOCKS_CLIENT_TELOS,
  BASE: BLOCKS_CLIENT_BASE,
  SHIMMER: BLOCKS_CLIENT_SHIMMER,
}

export const multiChainStartTime = {
  BITGERT: PCS_BITGERT_START,
  XDC: PCS_XDC_START,
  CORE: PCS_CORE_START,
  SCROLL: PCS_SCROLL_START,
  TELOS: PCS_TELOS_START,
  BASE: PCS_BASE_START,
  SHIMMER: PCS_SHIMMER_START,
}

export const multiChainId = {
  BITGERT: ChainId.BITGERT,
  XDC: ChainId.XDC,
  CORE: ChainId.CORE,
  SCROLL: ChainId.SCROLL,
  TELOS: ChainId.TELOS,
  BASE: ChainId.BASE,
  SHIMMER: ChainId.SHIMMER,
}

export const multiChainPaths = {
  [ChainId.BITGERT]: '',
  [ChainId.XDC]: '',
  [ChainId.CORE]: '',
  [ChainId.SCROLL]: '',
  [ChainId.TELOS]: '',
  [ChainId.BASE]: '',
  [ChainId.SHIMMER]: '',
}

// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  BITGERT: new GraphQLClient(INFO_CLIENT_BITGERT),
  XDC: new GraphQLClient(INFO_CLIENT_XDC),
  CORE: new GraphQLClient(INFO_CLIENT_CORE),
  SCROLL: new GraphQLClient(INFO_CLIENT_SCROLL),
  TELOS: new GraphQLClient(INFO_CLIENT_TELOS),
  BASE: new GraphQLClient(INFO_CLIENT_BASE),
  SHIMMER: new GraphQLClient(INFO_CLIENT_SHIMMER),
}

export const multiChainQueryEndPoint = {
  BITGERT: INFO_CLIENT_BITGERT,
  XDC: INFO_CLIENT_XDC,
  CORE: INFO_CLIENT_CORE,
  SCROLL: INFO_CLIENT_SCROLL,
  TELOS: INFO_CLIENT_TELOS,
  BASE: INFO_CLIENT_BASE,
  SHIMMER: INFO_CLIENT_SHIMMER,
}

export const multiChainScan: Record<MultiChainName, string> = { = {
  BITGERT: 'BriseScan',
  BSC: 'BscScan',
  DOGECHAIN: 'DogeScan',
  DOKEN: 'DokenScan',
  FUSE: 'FuseScan',
  XDC: 'XDCScan',
  CORE: 'CoreScan',
  XODEX: 'XODEXScan',
  SHARDEUM_TESTNET: 'ShardeumTestnetScan',
  SHIMMER_TESTNET: 'ShimmerTestnetScan',
  BASE: 'BaseScan',
  SCROLL: 'ScrollScan',
  TELOS: 'TelosScan',
  SHIMMER: 'ShimmerScan',
}

export const multiChainTokenBlackList: Record<MultiChainName, string[]> = {
  BITGERT: [''],
  DOGECHAIN: [''],
  DOKEN: [''],
  FUSE: [''],
  XDC: [''],
  CORE: [''],
  XODEX: [''],
  BSC: [''],
  SHARDEUM_TESTNET: [''],
  SHIMMER_TESTNET: [''],
  BASE: [''],
  TELOS: [''],
  SCROLL: [''],
  SHIMMER: [''],
}

export const multiChainTokenWhiteList: Record<MultiChainName, string[]> = {
  BITGERT: [''],
  DOGECHAIN: [''],
  DOKEN: [''],
  FUSE: [''],
  XDC: [''],
  CORE: [''],
  XODEX: [''],
  BSC: [''],
  SHARDEUM_TESTNET: [''],
  SHIMMER_TESTNET: [''],
  BASE: [''],
  TELOS: [''],
  SCROLL: [''],
  SHIMMER: [''],
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')

export const multiChainName: Record<number | string, MultiChainNameExtend> = chains.reduce((acc, chain) => {
  return {...acc, [chain.id]: chain.network.toUpperCase() as MultiChainName}
}, {})

export const v2SubgraphTokenName = chains.map((chain) => chain.network.toUpperCase())

export const subgraphTokenSymbol = {}