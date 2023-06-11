import { getAddress } from 'ethers/lib/utils'
import memoize from 'lodash/memoize'
import { Token } from '@pancakeswap/sdk'
import chainName from "../config/constants/chainName";


const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && chainName[token.chainId]) {
      return `https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/${chainName[token.chainId].toLowerCase()}/assets/${getAddress(
        token.address,
      )}/logo.png`
    }
    return null
  },
  (t) => `${t.chainId}#${t.address}`,
)

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId]) {
      return `https://assets-cdn.trustwallet.com/blockchains/${mapping[chainId]}/assets/${getAddress(address)}/logo.png`
    }
    return null
  },
  (address, chainId) => `${chainId}#${address}`,
)

export default getTokenLogoURL
