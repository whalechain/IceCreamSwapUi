import { ChainId, Token } from '@pancakeswap/sdk'
import { ChainMap, ChainTokenList } from '../types'
import {
  baseTokens,
  bitgertTokens,
  coreTokens,
  dogechainTokens,
  dokenTokens,
  fuseTokens, telosTokens,
  xdcTokens,
  xodexTokens
} from "@pancakeswap/tokens";
import { chains } from "@icecreamswap/constants";
import { Address } from "viem";

export const SMART_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CORE]: '0xD56d8dC0F34509c5D60471fA664Bd163F3cE0166',
  [ChainId.XDC]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
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
  [ChainId.CORE]: [coreTokens.wcore, coreTokens.wcore_old, coreTokens.ice, coreTokens.usdt],
  [ChainId.XODEX]: [xodexTokens.wxodex, xodexTokens.ice, xodexTokens.usdt],
  [ChainId.TELOS]: [telosTokens.wtlos, telosTokens.ice, telosTokens.usdt],
  [ChainId.BASE]: [baseTokens.weth, baseTokens.ice, baseTokens.usdt],
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
