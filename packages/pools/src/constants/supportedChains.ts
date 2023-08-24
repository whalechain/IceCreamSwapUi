import { ChainId } from '@pancakeswap/sdk'

export const SUPPORTED_CHAIN_IDS = [ChainId.CORE, ChainId.BITGERT, ChainId.XDC] as const

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number]
