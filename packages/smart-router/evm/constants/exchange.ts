import {ChainId, Token, WETH9} from '@pancakeswap/sdk'
import { ChainMap, ChainTokenList } from '../types'
import { coreTokens, ICE, USD } from "@pancakeswap/tokens";
import { chains } from "@icecreamswap/constants";
import { Address } from "viem";

export const SMART_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CORE]: '0xD7adD0E0A0e3fdA600E54362f96Ec3350bD4C3e9',
  [ChainId.SHIMMER]: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
  [ChainId.BASE]: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  [ChainId.BITGERT]: '0x7b2a5C88AB9367147F6ac384F857CbaDF5aA70a7',
  [ChainId.FUSE]: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
  [ChainId.SCROLL]: '0x7b2a5C88AB9367147F6ac384F857CbaDF5aA70a7',
  [ChainId.TELOS]: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  [ChainId.XDC]: '0x8ACeb2687B59F97Da274FE9135C3fAda0751ecb2',
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
