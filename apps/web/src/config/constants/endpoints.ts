import { ChainId } from '@pancakeswap/sdk'

export const INFO_CLIENT_BITGERT = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v2-bitgert'
export const BLOCKS_CLIENT_BITGERT = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-bitgert'

export const INFO_CLIENT_XDC = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v2-xdc'
export const BLOCKS_CLIENT_XDC = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-xdc'

export const INFO_CLIENT_CORE = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v2-core'
export const BLOCKS_CLIENT_CORE = 'https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/blocks-core'


export const INFO_CLIENT = 'https://proxy-worker.pancake-swap.workers.dev/bsc-exchange'
export const INFO_CLIENT_ETH = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exhange-eth'
export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap'
export const GRAPH_HEALTH = 'https://api.thegraph.com/index-node/graphql'
export const ACCESS_RISK_API = '/api/risk'

export const CELER_API = 'https://api.celerscan.com/scan'

export const BLOCKS_CLIENT_WITH_CHAIN: Partial<Record<ChainId, string>> = {
  [ChainId.BITGERT]: BLOCKS_CLIENT_BITGERT,
  [ChainId.XDC]: BLOCKS_CLIENT_XDC,
  [ChainId.CORE]: BLOCKS_CLIENT_CORE,
}

export const V3_SUBGRAPH_URLS = {
  [ChainId.CORE]: `https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v3-core`,
  [ChainId.BITGERT]: `https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v3-bitgert`,
  [ChainId.XDC]: `https://the-graph.icecreamswap.com/subgraphs/name/icecreamswap/exchange-v3-xdc`,
} satisfies Record<ChainId, string>

export const ASSET_CDN = 'https://assets.pancakeswap.finance'

export const TRADING_REWARD_API = 'https://pancake-trading-fee-rebate-api.pancake.run/api/v1'

export const QUOTING_API = `${process.env.NEXT_PUBLIC_QUOTING_API}/v0/quote`

export const FARMS_API = 'https://farms-api.pancakeswap.com'
