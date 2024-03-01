import {ChainId, Token, WETH9} from '@pancakeswap/sdk'
import { ChainMap, ChainTokenList } from '../types'
import { coreTokens, ICE, USD } from "@pancakeswap/tokens";
import { chains } from "@icecreamswap/constants";
import { Address } from "viem";

export const SMART_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CORE]: '0x134edBD6c41cA8F4904822daD5d45c44c38e99d5',
  [ChainId.SHIMMER]: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  [ChainId.BASE]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
  [ChainId.BITGERT]: '0x4ddC9394b8371765588B10134AA79472C1d42b16',
  [ChainId.FUSE]: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  [ChainId.SCROLL]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
  [ChainId.TELOS]: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3',
  [ChainId.XDC]: '0x2a9a2D31819cD71B60F25729Bc60a2D7E7545233',
  [ChainId.NEON]: '0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083',
  [ChainId.SHARDEUM_TEST]: '0xe0627818b29D2f28E62f54bC988E6e02C8dbC300',
  [ChainId.BLAST]: '0x84aeB58fb9187dD64282d0C0975F788e21dd4475',
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
