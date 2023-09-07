import { ChainId, Token } from '@pancakeswap/sdk'
import { bitgertTokens, bscTokens, coreTokens, xdcTokens } from "@pancakeswap/tokens";

export const usdGasTokensByChain: { [chainId in ChainId]?: Token[] } = {
  [ChainId.BSC]: [bscTokens.busd],
  [ChainId.CORE]: [coreTokens.usdt],
  [ChainId.BITGERT]: [bitgertTokens.usdti],
  [ChainId.XDC]: [xdcTokens.usdt],
}

export const nativeWrappedTokenByChain: { [chainId in ChainId]?: Token } = {
  [ChainId.BSC]: bscTokens.wbnb,
  [ChainId.CORE]: coreTokens.wcore,
  [ChainId.BITGERT]: bitgertTokens.wbrise,
  [ChainId.XDC]: [xdcTokens.wxdc],
}

export * from './v2'
export * from './v3'
export * from './stableSwap'
