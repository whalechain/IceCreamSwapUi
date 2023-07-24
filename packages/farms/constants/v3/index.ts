import { ChainId } from '@pancakeswap/sdk'
import { ComputedFarmConfigV3 } from '../../src/types'
import { farmsV3 as farm56 } from '../56'

export const farmsV3ConfigChainMap: Record<ChainId, ComputedFarmConfigV3[]> = {
  [ChainId.BSC]: farm56,
}
