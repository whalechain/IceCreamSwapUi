import { bsc } from './bsc'
import { core } from './core'
import { fortress } from "./fortress"

export const chainMap = {
  core,
  bsc,
  fortress,
  // shimmerTestnet,
}
export const chains = Object.values(chainMap)

export const getChain = (chainId: number) => {
  return chains.find((chain) => chain.id === chainId)
}

export enum ChainId {
  CORE = core.id,
  BSC = bsc.id,
  FORTRESS = fortress.id,
}

export const defaultChainId = ChainId.CORE
