export const PANICE_EXTENDED = 'https://tokens.pancakeswap.finance/pancakeswap-extended.json'
export const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
export const PANICE_ETH_DEFAULT = 'https://tokens.pancakeswap.finance/pancakeswap-eth-default.json'
export const PANICE_ETH_MM = 'https://tokens.pancakeswap.finance/pancakeswap-eth-mm.json'
export const PANICE_BSC_MM = 'https://tokens.pancakeswap.finance/pancakeswap-bnb-mm.json'
export const COINGECKO_ETH = 'https://tokens.coingecko.com/uniswap/all.json'
export const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

export const ETH_URLS = [PANICE_ETH_DEFAULT, PANICE_ETH_MM, COINGECKO_ETH]
export const BSC_URLS = [PANICE_EXTENDED, CMC, COINGECKO, PANICE_BSC_MM]

// List of official tokens list
export const OFFICIAL_LISTS = [PANICE_EXTENDED, PANICE_ETH_DEFAULT, PANICE_ETH_MM]

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  ...BSC_URLS,
  ...ETH_URLS,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
  ...WARNING_LIST_URLS,
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [PANICE_EXTENDED, PANICE_ETH_DEFAULT, PANICE_ETH_MM]
