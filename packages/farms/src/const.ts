import { ChainId } from '@pancakeswap/sdk'

export const supportedChainIdV2 = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM] as const
export const supportedChainIdV3 = [
  ChainId.GOERLI,
  ChainId.BSC,
  ChainId.BSC_TESTNET,
  ChainId.ETHEREUM,
  ChainId.ZKSYNC_TESTNET,
  ChainId.POLYGON_ZKEVM_TESTNET,
  ChainId.POLYGON_ZKEVM,
  ChainId.ZKSYNC,
  ChainId.ARBITRUM_ONE,
  ChainId.LINEA,
  ChainId.BASE,
] as const
export const bCakeSupportedChainId = [ChainId.BSC] as const

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
  [ChainId.ETHEREUM]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  [ChainId.GOERLI]: '0x864ED564875BdDD6F421e226494a0E7c071C06f8',
  [ChainId.BSC]: '0x556B9306565093C855AEA9AE92A594704c2Cd59e',
  [ChainId.BSC_TESTNET]: '0x4c650FB471fe4e0f476fD3437C3411B1122c4e3B',
  [ChainId.ZKSYNC_TESTNET]: '0x3c6Aa61f72932aD5D7C917737367be32D5509e6f',
  [ChainId.POLYGON_ZKEVM_TESTNET]: '0xb66b07590B30d4E6E22e45Ddc83B06Bb018A7B44',
  [ChainId.POLYGON_ZKEVM]: '0xe9c7f3196ab8c09f6616365e8873daeb207c0391',
  [ChainId.ZKSYNC]: '0x4c615E78c5fCA1Ad31e4d66eb0D8688d84307463',
  [ChainId.ARBITRUM_ONE]: '0x5e09ACf80C0296740eC5d6F643005a4ef8DaA694',
  [ChainId.LINEA]: '0x22E2f236065B780FA33EC8C4E58b99ebc8B55c57',
  [ChainId.BASE]: '0xC6A2Db661D5a5690172d8eB0a7DEA2d3008665A3',
} as const satisfies Record<FarmV3SupportedChainId, string>

export const nonBSCVaultAddresses = {
} as const
