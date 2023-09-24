import { ChainId } from '@pancakeswap/sdk'
import { chains } from '@icecreamswap/constants'

export const supportedChainIdV2 = chains.filter((chain) => chain.features.includes('farms')).map((chain) => chain.id)
export const supportedChainIdV3 = chains.filter((chain) => chain.features.includes('farmsV3')).map((chain) => chain.id)
export const bCakeSupportedChainId: ChainId[] = []

export const FARM_AUCTION_HOSTING_IN_SECONDS = 691200

export type FarmV2SupportedChainId = (typeof supportedChainIdV2)[number]

export type FarmV3SupportedChainId = (typeof supportedChainIdV3)[number]

export const masterChefAddresses = {
  32520: '0x090B19ea55b93C969EC98E1D8E3db0695698efCa',
  2000: '0xc44a6eb41f02740A6778CCb9591448a5EBC73b74',
  61916: '0x509733EaB85DEbdAE55306Aa81e3E4326f71cE0D',
  122: '0xBbB4CCfc93657AC125F4b1f734111349d1bFF611',
  50: '0xdD156cA7bff002f7827BDfFd38a0651CFBbe400e',
  1116: '0xe3277bb0f3C4b9C6FC1DBf81E328E14F3C9368C3',
  2415: '0xBD2e577dEa54602C7c367fa144981c8ACA6FD570',
} as const

export const masterChefV3Addresses = {
  [ChainId.CORE]: '0x6c6549a2aeFec87Ca9a3615fE3bf6E915Fccfb24',
} as const satisfies Record<FarmV3SupportedChainId, string>

export const nonBSCVaultAddresses = {
} as const
