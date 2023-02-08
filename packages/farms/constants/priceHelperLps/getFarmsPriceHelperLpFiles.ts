import { ChainId } from '@pancakeswap/sdk'
import FarmsBitgertPriceHelper from './32520'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.BITGERT:
      return FarmsBitgertPriceHelper
    default:
      return []
  }
}
