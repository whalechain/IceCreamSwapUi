import { ChainId } from '@pancakeswap/sdk'
import addresses from '../config/constants/contracts'
import { VaultKey } from '../state/types'

export interface Addresses {
  [chainId: number]: `0x${string}`
}

export const getAddress = (address: Addresses, chainId: ChainId): `0x${string}` => {
  return address[chainId]
}

export const getMasterChefAddress = (chainId: ChainId) => {
  return getAddress(addresses.masterChef, chainId)
}
export const getMasterChefV1Address = () => {
  return null // getAddress(addresses.masterChefV1)
}
export const getMulticallAddress = (chainId: number) => {
  return getAddress(addresses.multiCall, chainId)
}
export const getLotteryV2Address = () => {
  return null // return getAddress(addresses.lotteryV2)
}
export const getPancakeProfileAddress = () => {
  return null // return getAddress(addresses.pancakeProfile)
}
export const getPancakeBunniesAddress = () => {
  return null // return getAddress(addresses.pancakeBunnies)
}
export const getBunnyFactoryAddress = () => {
  return null // return getAddress(addresses.bunnyFactory)
}
export const getPredictionsV1Address = () => {
  return null // return getAddress(addresses.predictionsV1)
}
export const getPointCenterIfoAddress = () => {
  return null // return getAddress(addresses.pointCenterIfo)
}
export const getTradingCompetitionAddressEaster = () => {
  return null // return getAddress(addresses.tradingCompetitionEaster)
}
export const getTradingCompetitionAddressFanToken = () => {
  return null // return getAddress(addresses.tradingCompetitionFanToken)
}

export const getTradingCompetitionAddressMobox = () => {
  return null // return getAddress(addresses.tradingCompetitionMobox)
}

export const getTradingCompetitionAddressMoD = () => {
  return null // return getAddress(addresses.tradingCompetitionMoD)
}

export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return null // return getAddress(addresses[vaultKey])
}

export const getCakeVaultAddress = () => {
  return null // return getAddress(addresses.cakeVault)
}

export const getCakeFlexibleSideVaultAddress = () => {
  return null // return getAddress(addresses.cakeFlexibleSideVault)
}

export const getFarmAuctionAddress = () => {
  return null // return getAddress(addresses.farmAuction)
}
export const getAnniversaryAchievement = () => {
  return null // return getAddress(addresses.AnniversaryAchievement)
}

export const getNftMarketAddress = () => {
  return null // return getAddress(addresses.nftMarket)
}
export const getNftSaleAddress = () => {
  return null // return getAddress(addresses.nftSale)
}
export const getPancakeSquadAddress = () => {
  return null // return getAddress(addresses.pancakeSquad)
}
export const getPotteryDrawAddress = () => {
  return null // return getAddress(addresses.potteryDraw)
}

export const getZapAddress = (chainId?: number) => {
  return getAddress(addresses.zap, chainId)
}
export const getICakeAddress = () => {
  return null // return getAddress(addresses.iCake)
}

export const getBCakeFarmBoosterAddress = () => {
  return null // return getAddress(addresses.bCakeFarmBooster)
}

export const getBCakeFarmBoosterProxyFactoryAddress = () => {
  return null // return getAddress(addresses.bCakeFarmBoosterProxyFactory)
}

export const getNonBscVaultAddress = (chainId?: number) => {
  return null // return getAddress(addresses.nonBscVault, chainId)
}

export const getCrossFarmingSenderAddress = (chainId?: number) => {
  return null // return getAddress(addresses.crossFarmingSender, chainId)
}

export const getCrossFarmingReceiverAddress = (chainId?: number) => {
  return null // return getAddress(addresses.crossFarmingReceiver, chainId)
}

export const getStableSwapNativeHelperAddress = (chainId?: number) => {
  return getAddress(addresses.stableSwapNativeHelper, chainId)
}

export const getMasterChefV3Address = (chainId?: number) => {
  return getAddress(addresses.masterChefV3, chainId)
}

export const getV3MigratorAddress = (chainId?: number) => {
  return getAddress(addresses.v3Migrator, chainId)
}

export const getTradingRewardAddress = (chainId?: number) => {
  return getAddress(addresses.tradingReward, chainId)
}

export const getV3AirdropAddress = (chainId?: number) => {
  return getAddress(addresses.v3Airdrop, chainId)
}
