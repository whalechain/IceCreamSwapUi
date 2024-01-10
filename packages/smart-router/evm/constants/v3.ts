import { ChainId } from '@pancakeswap/sdk'
import { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.CORE]: '0x436E216B31eD9D19de62b57b4E64100b14F4EE60',
} as const satisfies Record<ChainId, Address>

export const V3_QUOTER_ADDRESSES = {
  [ChainId.CORE]: '0xFF98014521c91c7872435115dDc19b385Fc3bEE2',
} as const satisfies Record<ChainId, Address>
