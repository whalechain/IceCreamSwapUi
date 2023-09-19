import { ChainMap, BatchMulticallConfigs } from '../types'
import { chains } from "@icecreamswap/constants";

const DEFAULT = {
  defaultConfig: {
    multicallChunk: 150,
    gasLimitOverride: 1_000_000,
  },
  gasErrorFailureOverride: {
    gasLimitOverride: 1_000_000,
    multicallChunk: 30,
  },
  successRateFailureOverrides: {
    gasLimitOverride: 1_000_000,
    multicallChunk: 40,
  },
}

export const BATCH_MULTICALL_CONFIGS: ChainMap<BatchMulticallConfigs> = chains.reduce((acc, chain) => {
  return {...acc, [chain.id]: DEFAULT}
}, {})
