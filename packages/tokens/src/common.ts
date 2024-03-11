import { ChainId, ERC20Token } from '@pancakeswap/sdk'
import { chains } from '@icecreamswap/constants'
import { bitgertTokens } from './32520'
import { dogechainTokens } from './2000'
import { dokenTokens } from './61916'
import { fuseTokens } from './122'
import { xdcTokens } from './50'
import { coreTokens } from "./1116";
import { xodexTokens } from "./2415";
import { shardeumTestnetTokens } from "./8082";
import {telosTokens} from "./40";
import { shimmerTestnetTokens } from "./1072";
import { baseTokens } from "./8453";
import { shimmerTokens } from "./148";
import { scrollTokens } from "./534352";
import { neonTokens } from "./245022934";
import {blastTokens} from "./81457";

export const USD: Record<ChainId, ERC20Token> = chains.reduce((acc, chain) => {
  if (!chain.stableToken) return acc
  return {...acc, [chain.id]: new ERC20Token(
    chain.id,
    chain.stableToken.address,
    chain.stableToken.decimals,
    chain.stableToken.symbol,
    chain.stableToken.name
  )}
}, {})
export const STABLE_COIN = USD

export const ICE: Record<ChainId, ERC20Token> = chains.reduce((acc, chain) => {
  if (!chain.iceAddress) return acc
  return {...acc, [chain.id]: new ERC20Token(
      chain.id,
      chain.iceAddress,
      18,
      'ICE',
      'IceCream',
      'https://icecreamswap.com'
    )}
}, {})
export const ICE_OLD: Record<ChainId, ERC20Token> = {
  [ChainId.BITGERT]: bitgertTokens.ice,
  [ChainId.DOGE]: dogechainTokens.ice,
  [ChainId.DOKEN]: dokenTokens.ice,
  [ChainId.FUSE]: fuseTokens.ice,
  [ChainId.XDC]: xdcTokens.ice,
  [ChainId.BSC]: bitgertTokens.ice,
  [ChainId.CORE]: coreTokens.ice,
  [ChainId.XODEX]: xodexTokens.ice,
  [ChainId.SHARDEUM_TEST]: shardeumTestnetTokens.ice,
  [ChainId.TELOS]: telosTokens.ice,
  [ChainId.SHIMMER_TEST]: shimmerTestnetTokens.ice,
  [ChainId.BASE]: baseTokens.ice,
  [ChainId.SHIMMER]: shimmerTokens.ice,
  [ChainId.SCROLL]: scrollTokens.ice,
  [ChainId.NEON]: neonTokens.ice,
  [ChainId.BLAST]: blastTokens.ice,
}
