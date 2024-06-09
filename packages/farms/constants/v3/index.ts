import { ChainId } from '@pancakeswap/sdk'
import { ComputedFarmConfigV3 } from '../../src/types'
import { farmsV3 as farm1116 } from '../372'

export const farmsV3ConfigChainMap: Record<ChainId, ComputedFarmConfigV3[]> = {
  [ChainId.CORE]: farm1116,
}
