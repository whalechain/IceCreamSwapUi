import {ChainId} from '@pancakeswap/sdk'
import FarmsCorePriceHelper from './372'

// todo: make dynamic
export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CORE:
      return FarmsCorePriceHelper
    default:
      return []
  }
}
