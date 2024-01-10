import {ChainId, Token, WETH9} from '@pancakeswap/sdk'
import { ChainMap, ChainTokenList } from '../types'
import { coreTokens, ICE, USD } from "@pancakeswap/tokens";
import { chains } from "@icecreamswap/constants";
import { Address } from "viem";

export const SMART_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CORE]: '0x4c2CE0a6F841A02f5F93e0E5b5217650206F4223',
  [ChainId.SHIMMER]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.BASE]: '0x84aeB58fb9187dD64282d0C0975F788e21dd4475',
  [ChainId.BITGERT]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.FUSE]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.SCROLL]: '0x84aeB58fb9187dD64282d0C0975F788e21dd4475',
  [ChainId.TELOS]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.XDC]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
  [ChainId.XODEX]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.NEON]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
} as const

export const V2_ROUTER_ADDRESS: ChainMap<Address> = chains.reduce((acc, chain) => {
  return chain.swap
    ?{...acc, [chain.id]: chain.swap.routerAddress}
    :acc
}, {})

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<Address> = {}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...chains.reduce((acc, chain) => ({...acc, [chain.id]: [WETH9[chain.id], ICE[chain.id], USD[chain.id]]}), {}),
  [ChainId.CORE]: [coreTokens.wcore, coreTokens.wcore_old, coreTokens.ice, coreTokens.usdt, coreTokens.usdtl0],
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
