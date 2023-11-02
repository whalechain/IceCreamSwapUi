import { infoStableSwapClient } from "utils/graphql"
import {
  BLOCKS_CLIENT_WITH_CHAIN,
  INFO_CLIENT_WITH_CHAIN
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

// todo: make dynamic
export const multiChainQueryMainToken = {
  BITGERT: 'ETH',
  XDC: 'ETH',
  CORE: 'ETH',
  SCROLL: 'ETH',
  TELOS: 'ETH',
  BASE: 'ETH',
  SHIMMER: 'ETH',
}

// todo: make dynamic
export const multiChainBlocksClient = {
  BITGERT: BLOCKS_CLIENT_WITH_CHAIN[ChainId.BITGERT],
  XDC: BLOCKS_CLIENT_WITH_CHAIN[ChainId.XDC],
  CORE: BLOCKS_CLIENT_WITH_CHAIN[ChainId.CORE],
  SCROLL: BLOCKS_CLIENT_WITH_CHAIN[ChainId.SCROLL],
  TELOS: BLOCKS_CLIENT_WITH_CHAIN[ChainId.TELOS],
  BASE: BLOCKS_CLIENT_WITH_CHAIN[ChainId.BASE],
  SHIMMER: BLOCKS_CLIENT_WITH_CHAIN[ChainId.SHIMMER],
}

// todo: make dynamic
export const multiChainStartTime = {
  BITGERT: PCS_BITGERT_START,
  XDC: PCS_XDC_START,
  CORE: PCS_CORE_START,
  SCROLL: PCS_SCROLL_START,
  TELOS: PCS_TELOS_START,
  BASE: PCS_BASE_START,
  SHIMMER: PCS_SHIMMER_START,
}

// todo: make dynamic
export const multiChainId = {
  BITGERT: ChainId.BITGERT,
  XDC: ChainId.XDC,
  CORE: ChainId.CORE,
  SCROLL: ChainId.SCROLL,
  TELOS: ChainId.TELOS,
  BASE: ChainId.BASE,
  SHIMMER: ChainId.SHIMMER,
}

// todo: make dynamic
export const multiChainPaths = {
  [ChainId.BITGERT]: '',
  [ChainId.XDC]: '',
  [ChainId.CORE]: '',
  [ChainId.SCROLL]: '',
  [ChainId.TELOS]: '',
  [ChainId.BASE]: '',
  [ChainId.SHIMMER]: '',
}

// todo: make dynamic
// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  BITGERT: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.BITGERT]),
  XDC: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.XDC]),
  CORE: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.CORE]),
  SCROLL: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.SCROLL]),
  TELOS: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.TELOS]),
  BASE: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.BASE]),
  SHIMMER: new GraphQLClient(INFO_CLIENT_WITH_CHAIN[ChainId.SHIMMER]),
}

// todo: make dynamic
export const multiChainScan: Record<MultiChainName, string> = {
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

// todo: make dynamic
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

// todo: make dynamic
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

export const subgraphTokenSymbol = {}