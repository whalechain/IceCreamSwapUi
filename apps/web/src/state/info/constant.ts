import { infoClientBITGERT, infoStableSwapClient } from 'utils/graphql'
import { INFO_CLIENT_BITGERT, BLOCKS_CLIENT_BITGERT } from 'config/constants/endpoints'
import { ChainId } from '@pancakeswap/sdk'
import { PCS_BITGERT_START } from 'config/constants/info'
import { GraphQLClient } from 'graphql-request'

export type MultiChainName = 'BITGERT' | 'DOGECHAIN' | 'DOKEN' | 'FUSE' | 'XDC'

export const multiChainQueryMainToken = {
  BITGERT: 'BNB',
}

export const multiChainBlocksClient = {
  BITGERT: BLOCKS_CLIENT_BITGERT,
}

export const multiChainStartTime = {
  BITGERT: PCS_BITGERT_START,
}

export const multiChainId = {
  BITGERT: ChainId.BITGERT,
}

export const multiChainPaths = {
  [ChainId.BITGERT]: '',
}

// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  BITGERT: infoClientBITGERT,
}

export const multiChainQueryEndPoint = {
  BITGERT: INFO_CLIENT_BITGERT,
}

export const multiChainScan = {
  BITGERT: 'BriseScan',
  DOGECHAIN: 'DogeScan',
  DOKEN: 'DokenScan',
  FUSE: 'FuseScan',
  SHARDEUM_TEST: 'ShardeumTestnetScan',
}

export const multiChainTokenBlackList = {
  BITGERT: [""],
  DOGECHAIN: [""],
  DOKEN: [""],
  FUSE: [""],
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
