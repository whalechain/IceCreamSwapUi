import { neonTokens } from "@pancakeswap/tokens";

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [// souceId can be any positive number as long as it is unique and not 0
    // version can't be 3 as that uses the pancake profiles that we did not implement

    {
        sousId: 49,
        stakingToken: neonTokens.ice,
        earningToken: neonTokens.chonk,
        contractAddress: '0x3c9D3A28dc949B3f66728C57Cfdaf698e585E536',
        poolCategory: PoolCategory.CORE,
        tokenPerBlock: '0.496',
        version: 2,
    },

].map((p: any) => ({
    ...p,
    stakingToken: p.stakingToken.serialize,
    earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p: any) => ({
    ...p,
    isFinished: true,
    stakingToken: p.stakingToken.serialize,
    earningToken: p.earningToken.serialize,
}))

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
