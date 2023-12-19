import { ChainId, Token } from '@pancakeswap/sdk'
import { ChainMap, ChainTokenList } from '../types'
import {
  bitgertTokens,
  coreTokens,
  dogechainTokens,
  dokenTokens,
  fuseTokens,
  xdcTokens,
  xodexTokens,
  shardeumTestnetTokens,
  telosTokens,
  shimmerTestnetTokens,
  baseTokens,
  shimmerTokens,
  scrollTokens
} from "@pancakeswap/tokens";
import { chains } from "@icecreamswap/constants";
import { Address } from "viem";

export const SMART_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CORE]: '0x5745701Df5B2Bbb5f9ebc323151bbE265C326dD5',
  [ChainId.SHIMMER]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.BASE]: '0x84aeB58fb9187dD64282d0C0975F788e21dd4475',
  [ChainId.BITGERT]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.FUSE]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.SCROLL]: '0x84aeB58fb9187dD64282d0C0975F788e21dd4475',
  [ChainId.TELOS]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.XDC]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
  [ChainId.XODEX]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
} as const

export const V2_ROUTER_ADDRESS: ChainMap<Address> = chains.reduce((acc, chain) => {
  return chain.swap
    ?{...acc, [chain.id]: chain.swap.routerAddress}
    :acc
}, {})

export const AKKA_ROUTER_ADDRESS: ChainMap<Address> = chains.reduce((acc, chain) => {
  return chain.swapAkka
    ?{...acc, [chain.id]: chain.swapAkka.routerAddress}
    :acc
}, {})

export const AKKA_ROUTER_V3_ADDRESS: ChainMap<Address> = chains.reduce((acc, chain) => {
  return chain.swapAkka?.routerAddressV3
    ?{...acc, [chain.id]: chain.swapAkka.routerAddressV3}
    :acc
}, {})

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<Address> = {}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: Partial<ChainTokenList> = {
  [ChainId.BITGERT]: [bitgertTokens.wbrise, bitgertTokens.ice, bitgertTokens.usdci, bitgertTokens.usdti],
  [ChainId.DOGE]: [dogechainTokens.wdoge, dogechainTokens.ice],
  [ChainId.DOKEN]: [dokenTokens.wdkn, dokenTokens.ice, dokenTokens.usdt],
  [ChainId.FUSE]: [fuseTokens.wfuse, fuseTokens.ice],
  [ChainId.XDC]: [xdcTokens.wxdc, xdcTokens.ice, xdcTokens.usdt],
  [ChainId.CORE]: [coreTokens.wcore, coreTokens.wcore_old, coreTokens.ice, coreTokens.usdt, coreTokens.usdtl0],
  [ChainId.XODEX]: [xodexTokens.wxodex, xodexTokens.ice, xodexTokens.usdt],
  [ChainId.SHARDEUM_TEST]: [shardeumTestnetTokens.wshm, shardeumTestnetTokens.ice, shardeumTestnetTokens.usdt],
  [ChainId.TELOS]: [telosTokens.wtlos, telosTokens.ice, telosTokens.usdt],
  [ChainId.SHIMMER_TEST]: [shimmerTestnetTokens.wsmr, shimmerTestnetTokens.ice, shimmerTestnetTokens.usdt],
  [ChainId.BASE]: [baseTokens.weth, baseTokens.ice, baseTokens.usdt],
  [ChainId.SHIMMER]: [shimmerTokens.wsmr, shimmerTokens.ice, shimmerTokens.usdt],
  [ChainId.SCROLL]: [scrollTokens.weth, scrollTokens.ice, scrollTokens.usdt],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {
  [ChainId.BSC]: {
    // [bscTokens.axlusdc.address]: [bscTokens.usdt],
  },
}
