import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms'
import { ChainId } from '@pancakeswap/sdk'
import PoolsCorePriceHelper from './pools/372'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CORE:
      return PoolsCorePriceHelper
    default:
      return []
  }
}
