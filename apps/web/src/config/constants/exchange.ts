import { ChainId, Percent, Token } from '@pancakeswap/sdk'
import {
  bitgertTokens,
  coreTokens,
  dogechainTokens,
  dokenTokens,
  fuseTokens,
  xdcTokens,
  xodexTokens,
  shardeumTestnetTokens,
  telosTokens,
  shimmerTestnetTokens,
  baseTokens,
  shimmerTokens,
  scrollTokens,
  neonTokens,
  blastTokens,
  qitmeerTokens,
  degenTokens,
} from '@pancakeswap/tokens'
import { ChainTokenList } from './types'

export {
  ADDITIONAL_BASES,
  V2_ROUTER_ADDRESS,
  BASES_TO_CHECK_TRADES_AGAINST,
  CUSTOM_BASES,
} from '@pancakeswap/smart-router/evm'

// todo: make dynamic for all ChainIds
export const CHAIN_REFRESH_TIME = {
  [ChainId.BSC]: 6_000,
  [ChainId.BITGERT]: 6_000,
  [ChainId.CORE]: 6_000,
} as const satisfies Record<ChainId, number>

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  [ChainId.BITGERT]: [bitgertTokens.ice, bitgertTokens.usdti],
  [ChainId.DOGE]: [dogechainTokens.ice],
  [ChainId.DOKEN]: [dokenTokens.ice],
  [ChainId.FUSE]: [fuseTokens.ice],
  [ChainId.XDC]: [xdcTokens.ice],
  [ChainId.CORE]: [coreTokens.ice, coreTokens.usdt],
  [ChainId.XODEX]: [xodexTokens.ice],
  [ChainId.SHARDEUM_TEST]: [shardeumTestnetTokens.ice, shardeumTestnetTokens.usdt],
  [ChainId.TELOS]: [telosTokens.ice],
  [ChainId.SHIMMER_TEST]: [shimmerTestnetTokens.ice],
  [ChainId.BASE]: [baseTokens.ice],
  [ChainId.SHIMMER]: [shimmerTokens.ice],
  [ChainId.SCROLL]: [scrollTokens.ice],
  [ChainId.NEON]: [neonTokens.ice],
  [ChainId.BLAST]: [blastTokens.ice, blastTokens.usdb],
  [ChainId.QITMEER]: [qitmeerTokens.ice, qitmeerTokens.usdt],
  [ChainId.DEGEN]: [degenTokens.ice, degenTokens.usdt],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  [ChainId.BITGERT]: [
    bitgertTokens.wbrise,
    bitgertTokens.sphynx,
    bitgertTokens.bpad,
    bitgertTokens.broge,
    bitgertTokens.brzilla,
    bitgertTokens.btxt,
    bitgertTokens.eltg,
    bitgertTokens.evo,
    bitgertTokens.map,
    bitgertTokens.miidas,
    bitgertTokens.mir,
    bitgertTokens.numi,
    bitgertTokens.omnia,
    bitgertTokens.prds,
    bitgertTokens.rluna,
    bitgertTokens.vef,
    bitgertTokens.wmf,
    bitgertTokens.yogo,
    bitgertTokens.ypc,
    bitgertTokens.ice,
    bitgertTokens.tokyo,
    bitgertTokens.usdc,
    bitgertTokens.usdt,
    bitgertTokens.wolf,
    bitgertTokens.usdti,
    bitgertTokens.$3dc,
    bitgertTokens.darrival,
    bitgertTokens.ethi,
    bitgertTokens.dogei,
    bitgertTokens.bnbi,
    bitgertTokens.shibi,
    bitgertTokens.daii,
    bitgertTokens.usdc,
    bitgertTokens.busdi,
    bitgertTokens.baskom,
    bitgertTokens.abr,
    bitgertTokens.lung,
  ],
  [ChainId.DOGE]: [dogechainTokens.wdoge, dogechainTokens.ice],
  [ChainId.DOKEN]: [dokenTokens.wdkn, dokenTokens.ice, dokenTokens.usdt],
  [ChainId.FUSE]: [fuseTokens.wfuse, fuseTokens.ice],
  [ChainId.XDC]: [xdcTokens.wxdc, xdcTokens.ice, xdcTokens.usdt, xdcTokens.usdc],
  [ChainId.CORE]: [coreTokens.wcore, coreTokens.wcore_old, coreTokens.score, coreTokens.ice, coreTokens.usdt, coreTokens.usdtl0],
  [ChainId.XODEX]: [xodexTokens.wxodex, xodexTokens.ice, xodexTokens.usdt],
  [ChainId.SHARDEUM_TEST]: [shardeumTestnetTokens.wshm, shardeumTestnetTokens.ice, shardeumTestnetTokens.usdt],
  [ChainId.TELOS]: [telosTokens.wtlos, telosTokens.ice, telosTokens.usdt],
  [ChainId.SHIMMER_TEST]: [shimmerTestnetTokens.wsmr, shimmerTestnetTokens.ice, shimmerTestnetTokens.usdt],
  [ChainId.BASE]: [baseTokens.weth, baseTokens.ice, baseTokens.usdt],
  [ChainId.SHIMMER]: [shimmerTokens.wsmr, shimmerTokens.ice, shimmerTokens.usdt],
  [ChainId.SCROLL]: [scrollTokens.weth, scrollTokens.ice, scrollTokens.usdt],
  [ChainId.NEON]: [neonTokens.wneon, neonTokens.ice, neonTokens.usdt],
  [ChainId.BLAST]: [blastTokens.ice, blastTokens.weth, blastTokens.usdb],
  [ChainId.QITMEER]: [qitmeerTokens.wmeer, qitmeerTokens.ice, qitmeerTokens.usdt],
  [ChainId.DEGEN]: [degenTokens.wdegen, degenTokens.ice, degenTokens.usdt],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.BITGERT]: [
    [bitgertTokens.wbrise, bitgertTokens.ice],
    [bitgertTokens.usdti, bitgertTokens.ice],
  ],
  [ChainId.DOGE]: [
    [dogechainTokens.wdoge, dogechainTokens.ice],
    [dogechainTokens.usdt, dogechainTokens.ice],
  ],
  [ChainId.DOKEN]: [[dokenTokens.wdkn, dokenTokens.ice]],
  [ChainId.FUSE]: [[fuseTokens.wfuse, fuseTokens.ice]],
  [ChainId.XDC]: [
    [xdcTokens.wxdc, xdcTokens.ice],
    [xdcTokens.usdt, xdcTokens.ice],
  ],
  [ChainId.CORE]: [
    [coreTokens.wcore, coreTokens.ice],
    [coreTokens.wcore, coreTokens.usdt],
    [coreTokens.usdt, coreTokens.ice],
  ],
  [ChainId.XODEX]: [
    [xodexTokens.wxodex, xodexTokens.ice],
    [xodexTokens.usdt, xodexTokens.ice],
  ],
  [ChainId.SHARDEUM_TEST]: [
    [shardeumTestnetTokens.wshm, shardeumTestnetTokens.ice],
    [shardeumTestnetTokens.usdt, shardeumTestnetTokens.ice]
  ],
  [ChainId.TELOS]: [
    [telosTokens.wtlos, telosTokens.ice],
    [telosTokens.usdt, telosTokens.ice],
  ],
  [ChainId.SHIMMER_TEST]: [
    [shimmerTestnetTokens.wsmr, shimmerTestnetTokens.ice],
    [shimmerTestnetTokens.usdt, shimmerTestnetTokens.ice],
  ],
  [ChainId.BASE]: [
    [baseTokens.weth, baseTokens.ice],
    [baseTokens.usdt, baseTokens.ice],
  ],
  [ChainId.SHIMMER]: [
    [shimmerTokens.usdt, shimmerTokens.ice],
    [shimmerTokens.wsmr, shimmerTokens.ice],
    [shimmerTokens.wsmr, shimmerTokens.usdt],
  ],
  [ChainId.SCROLL]: [
    [scrollTokens.usdt, scrollTokens.ice],
    [scrollTokens.weth, scrollTokens.ice],
    [scrollTokens.weth, scrollTokens.usdt],
  ],
  [ChainId.NEON]: [
    [neonTokens.usdt, neonTokens.ice],
    [neonTokens.wneon, neonTokens.ice],
    [neonTokens.wneon, neonTokens.usdt],
  ],
  [ChainId.BLAST]: [
    [blastTokens.weth, blastTokens.ice],
    [blastTokens.usdb, blastTokens.ice],
    [blastTokens.weth, blastTokens.usdb],
  ],
  [ChainId.QITMEER]: [
    [qitmeerTokens.usdt, qitmeerTokens.ice],
    [qitmeerTokens.wmeer, qitmeerTokens.ice],
    [qitmeerTokens.wmeer, qitmeerTokens.usdt],
  ],
  [ChainId.DEGEN]: [
    [degenTokens.usdt, degenTokens.ice],
    [degenTokens.wdegen, degenTokens.ice],
    [degenTokens.wdegen, degenTokens.usdt],
  ],
}

export const BIG_INT_ZERO = 0n
export const BIG_INT_TEN = 10n

// one basis point
export const BIPS_BASE = 10000n
export const ONE_BIPS = new Percent(1n, BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(100n, BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(300n, BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(500n, BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(1000n, BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(1500n, BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: bigint = BIG_INT_TEN ** 15n // .001 BNB
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(50n, BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(30n, BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)

// BNB
export const DEFAULT_INPUT_CURRENCY = 'BNB'
// ICE
export const DEFAULT_OUTPUT_CURRENCY = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'

// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = 500000n

export const LIMIT_ORDERS_DOCS_URL = 'https://docs.icecreamswap.com/products/pancakeswap-exchange/limit-orders'

export const EXCHANGE_PAGE_PATHS = ['/swap', '/limit-orders', 'liquidity', '/add', '/find', '/remove']
