import { ChainId } from '@pancakeswap/sdk'
import { Address } from 'viem'
import { chains } from '@icecreamswap/constants'


export const MULTICALL_ADDRESS: { [key in ChainId]: Address } = chains.reduce((acc, chain) => {
  if (!chain.contracts || !chain.contracts.multicall3) return acc
  return {...acc, [chain.id]: chain.contracts.multicall3.address}
}, {})
