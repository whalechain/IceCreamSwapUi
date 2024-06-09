import { ChainId } from "@pancakeswap/sdk";

export const SUPPORTED_CHAIN_IDS = [ChainId.CORE]

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number]
