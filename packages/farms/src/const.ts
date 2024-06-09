import { ChainId } from '@pancakeswap/sdk'
import { chains } from '@icecreamswap/constants'

export const supportedChainIdV2 = chains.filter((chain) => chain.features.includes('farms')).map((chain) => chain.id)
export const supportedChainIdV3 = chains.filter((chain) => chain.features.includes('farmsV3')).map((chain) => chain.id)
export const bCakeSupportedChainId: ChainId[] = []

export const FARM_AUCTION_HOSTING_IN_SECONDS = 691200

export type FarmV2SupportedChainId = (typeof supportedChainIdV2)[number]

export type FarmV3SupportedChainId = (typeof supportedChainIdV3)[number]

export const SMART_ROUTER_ADDRESSES: Record<ChainId, `0x${string}`> = chains.reduce((acc, chain) => {
  return chain.farmV2Address
    ?{...acc, [chain.id]: chain.farmV2Address}
    :acc
}, {})

export const masterChefAddresses: Record<number, `0x${string}`> = {
  372: "0xe3277bb0f3C4b9C6FC1DBf81E328E14F3C9368C3",
}

export const masterChefV3Addresses: Record<number, `0x${string}`> = {
  [ChainId.CORE]: '0xc378c540A8CD4e2F7475a1850d9E854C1Ea8b9E8',
} as const satisfies Record<FarmV3SupportedChainId, string>

export const nonBSCVaultAddresses = {
} as const
