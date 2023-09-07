import { getChain } from '@icecreamswap/constants'

export * from './pools'
export * from './contracts'
export * from './supportedChains'



export const SECONDS_IN_YEAR = 31536000 // 365 * 24 * 60 * 60

export const blocksPerYear = (chainId: number) => {
  const chain = getChain(chainId)
  return SECONDS_IN_YEAR / (chain? chain.blockInterval: 3)
}
