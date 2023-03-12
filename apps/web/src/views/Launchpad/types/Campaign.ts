import { BigNumber } from 'ethers'
import { Campaign as DatabaseCampaign } from '@prisma/client'

export interface Campaign {
  id: string
  price: string
  address: string
  chainId: number
  sold: number
  total: number
  lockupTime: number
  startTime: number
  endTime: number
  liquidity: number
}

interface ChainCampaignData {
  id: string
  token: string
  softCap: BigNumber
  hardCap: BigNumber
  startDate: Date
  endDate: Date
  rate: BigNumber
  paymentToken: string
  minAllowed: BigNumber // min amount of payment token
  maxAllowed: BigNumber // max amount of payment token
  poolRate: BigNumber
  lockDuration: BigNumber
  liquidityRate: BigNumber
}

interface DatabaseCampaignData {
  address: string
  chainId: number
  website: string
  banner: string
  twitter?: string
  telegram?: string
  discord?: string
  github?: string
  reddit?: string
  description: string
}
