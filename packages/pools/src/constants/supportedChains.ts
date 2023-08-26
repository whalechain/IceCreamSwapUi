import { SUPPORT_STAKING } from "web/src/config/constants/supportChains";

export const SUPPORTED_CHAIN_IDS = SUPPORT_STAKING

export type SupportedChainId = (typeof SUPPORTED_CHAIN_IDS)[number]
