import { formatEther } from '@ethersproject/units'
import { MultiCallV2 } from '@pancakeswap/multicall'
import BigNumber from 'bignumber.js'
import { masterChefAddresses, masterChefV3Addresses } from './const'
import { farmV2FetchFarms, FetchFarmsParams, fetchMasterChefV2Data } from './v2/fetchFarmsV2'
import {
  farmV3FetchFarms,
  fetchMasterChefV3Data,
  fetchCommonTokenUSDValue,
  CommonPrice,
  LPTvl,
  getCakeApr,
} from './fetchFarmsV3'
import { ComputedFarmConfigV3, FarmV3DataWithPrice } from './types'
import { chains } from '@icecreamswap/constants'

export const SUPPORT_FARMS = chains.filter((chain) => chain.features.includes('farms')).map((chain) => chain.id)
export const bCakeSupportedChainId = []
export { masterChefAddresses } from './const'
const supportedChainId = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM]
const supportedChainIdV3 = [ChainId.GOERLI, ChainId.BSC, ChainId.BSC_TESTNET, ChainId.ETHEREUM]
export const bCakeSupportedChainId = [ChainId.BSC]

export function createFarmFetcher(multicallv2: MultiCallV2) {
  const fetchFarms = async (params: Pick<FetchFarmsParams, 'chainId' | 'farms'>) => {
    const { farms, chainId } = params
    const masterChefAddress = masterChefAddresses[chainId]
    const { poolLength, totalRegularAllocPoint, totalSpecialAllocPoint, icePerBlock } = await fetchMasterChefV2Data({
      multicallv2,
      masterChefAddress,
      chainId,
    })
    const regularCakePerBlock = formatEther(icePerBlock)
    const farmsWithPrice = await farmV2FetchFarms({
      multicallv2,
      masterChefAddress,
      chainId,
      farms: farms.filter((f) => !f.pid || poolLength.gt(f.pid)),
      totalRegularAllocPoint,
      totalSpecialAllocPoint,
    })

    return {
      farmsWithPrice,
      poolLength: poolLength.toNumber(),
      regularCakePerBlock: +regularCakePerBlock,
      totalRegularAllocPoint: totalRegularAllocPoint.toString(),
    }
  }

  return {
    fetchFarms,
    isChainSupported: (chainId: number) => SUPPORT_FARMS.includes(chainId),
    SUPPORT_FARMS,
  }
}

export function createFarmFetcherV3(multicallv2: MultiCallV2) {
  const fetchFarms = async ({
    farms,
    chainId,
    commonPrice,
  }: {
    chainId: ChainId
    farms: ComputedFarmConfigV3[]
    commonPrice: CommonPrice
  }) => {
    const masterChefAddress = masterChefV3Addresses[chainId]
    if (!masterChefAddress) {
      throw new Error('Unsupported chain')
    }

    try {
      const { poolLength, totalAllocPoint, latestPeriodCakePerSecond } = await fetchMasterChefV3Data({
        multicallv2,
        masterChefAddress,
        chainId,
      })

      const cakePerSecond = new BigNumber(latestPeriodCakePerSecond.toString()).div(1e18).div(1e12).toString()

      const farmsWithPrice = await farmV3FetchFarms({
        farms,
        chainId,
        multicallv2,
        masterChefAddress,
        totalAllocPoint,
        commonPrice,
      })

      return {
        poolLength: poolLength.toNumber(),
        farmsWithPrice,
        cakePerSecond,
        totalAllocPoint: totalAllocPoint.toString(),
      }
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  const getCakeAprAndTVL = (farm: FarmV3DataWithPrice, lpTVL: LPTvl, cakePrice: string, cakePerSecond: string) => {
    const [token0Price, token1Price] = farm.token.sortsBefore(farm.quoteToken)
      ? [farm.tokenPriceBusd, farm.quoteTokenPriceBusd]
      : [farm.quoteTokenPriceBusd, farm.tokenPriceBusd]
    const tvl = new BigNumber(token0Price).times(lpTVL.token0).plus(new BigNumber(token1Price).times(lpTVL.token1))

    const cakeApr = getCakeApr(farm.poolWeight, tvl, cakePrice, cakePerSecond)

    return {
      activeTvlUSD: tvl.toString(),
      activeTvlUSDUpdatedAt: lpTVL.updatedAt,
      cakeApr,
    }
  }

  return {
    fetchFarms,
    getCakeAprAndTVL,
    isChainSupported: (chainId: number) => supportedChainIdV3.includes(chainId),
    supportedChainId: supportedChainIdV3,
    isTestnet: (chainId: number) => ![ChainId.BSC, ChainId.ETHEREUM].includes(chainId),
  }
}

export * from './v2/apr'
export * from './v2/farmsPriceHelpers'
export * from './types'
export * from './v2/deserializeFarmUserData'
export * from './v2/deserializeFarm'
export { FARM_AUCTION_HOSTING_IN_SECONDS } from './const'
export * from './v2/filterFarmsByQuery'

export { masterChefV3Addresses, fetchCommonTokenUSDValue }
