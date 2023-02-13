import { ChainId } from '@pancakeswap/sdk'
import { SUPPORT_FARMS } from '@pancakeswap/farms'

export { SUPPORT_FARMS }

export const SUPPORT_ONLY_BITGERT = [ChainId.BITGERT]

export const SUPPORT_SWAP = [ChainId.BITGERT, ChainId.DOKEN, ChainId.FUSE, ChainId.DOGE, ChainId.XDC, ChainId.CORE]
export const SUPPORT_STAKING = [ChainId.BITGERT, ChainId.XDC]
export const SUPPORT_INFO = [ChainId.BITGERT, ChainId.XDC, ChainId.CORE]
export const SUPPORT_BRIDGE = [ChainId.BITGERT, ChainId.DOKEN, ChainId.FUSE, ChainId.DOGE, ChainId.XDC, ChainId.BSC, ChainId.CORE]

export const SUPPORT_ZAP = []
