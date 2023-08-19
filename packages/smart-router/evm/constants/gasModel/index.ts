import { ChainId, Token } from '@pancakeswap/sdk'
import { bscTokens, coreTokens } from "@pancakeswap/tokens";

export const usdGasTokensByChain: { [chainId in ChainId]?: Token[] } = {
  [ChainId.BSC]: [bscTokens.busd],
  [ChainId.CORE]: [coreTokens.usdt],
}

export const nativeWrappedTokenByChain: { [chainId in ChainId]?: Token } = {
  [ChainId.BSC]: bscTokens.wbnb,
  [ChainId.CORE]: coreTokens.wcore,
}

export * from './v2'
export * from './v3'
export * from './stableSwap'
