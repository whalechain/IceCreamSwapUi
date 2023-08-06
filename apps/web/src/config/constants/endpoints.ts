import { ChainId } from '@pancakeswap/sdk'

export const INFO_CLIENT_BITGERT = 'https://graph-bitgert.icecreamswap.com/subgraphs/name/simone1999/icecreamswap-bitgert'
export const BLOCKS_CLIENT_BITGERT = 'https://graph-bitgert.icecreamswap.com/subgraphs/name/icecreamswap/blocks-bitgert'

export const INFO_CLIENT_XDC = 'https://graph-xdc.icecreamswap.com/subgraphs/name/simone1999/icecreamswap-xdc'
export const BLOCKS_CLIENT_XDC = 'https://graph-xdc.icecreamswap.com/subgraphs/name/icecreamswap/blocks-xdc'

export const INFO_CLIENT_CORE = 'https://graph-core.icecreamswap.com/subgraphs/name/simone1999/icecreamswap-core'
export const BLOCKS_CLIENT_CORE = 'https://graph-core.icecreamswap.com/subgraphs/name/icecreamswap/blocks-core'


export const INFO_CLIENT = 'https://proxy-worker.pancake-swap.workers.dev/bsc-exchange'
export const V3_BSC_INFO_CLIENT = `https://open-platform.nodereal.io/${
  process.env.NEXT_PUBLIC_NODE_REAL_API_INFO || process.env.NEXT_PUBLIC_NODE_REAL_API_ETH
}/pancakeswap-v3/graphql`

export const INFO_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth'
export const BLOCKS_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks'
export const BLOCKS_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/blocklytics/ethereum-blocks'

export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap'
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'

export const FARM_API = 'https://farms.pancake-swap.workers.dev'

export const BIT_QUERY = 'https://graphql.bitquery.io'

export const ACCESS_RISK_API = '/api/risk'

export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.BSC]: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
  [ChainId.ETHEREUM]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth',
}

export const BLOCKS_CLIENT_WITH_CHAIN: Partial<Record<ChainId, string>> = {
  [ChainId.BITGERT]: BLOCKS_CLIENT_BITGERT,
  [ChainId.XDC]: BLOCKS_CLIENT_XDC,
  [ChainId.CORE]: BLOCKS_CLIENT_CORE,
}

export const ASSET_CDN = 'https://assets.pancakeswap.finance'

export const V3_SUBGRAPH_URLS = {
  // [ChainId.BSC]: `https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-v3-bsc`,
} satisfies Record<ChainId, string>

export const TRADING_REWARD_API = 'https://pancake-trading-fee-rebate-api.pancake.run/api/v1'

export const QUOTING_API = `${process.env.NEXT_PUBLIC_QUOTING_API}/v0/quote`

export const FARMS_API = 'https://farms-api.pancakeswap.com'
