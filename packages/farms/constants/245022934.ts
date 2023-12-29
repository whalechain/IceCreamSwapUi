import { SerializedFarmConfig } from '@pancakeswap/farms'
import { neonTokens, telosTokens } from "@pancakeswap/tokens";

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'NEON-USDT',
    lpAddress: '0x8EA822e85D2eABFE8cfbAF90F153B393f802aAEa',
    token: neonTokens.usdt,
    quoteToken: neonTokens.wneon,
  },
  {
    pid: 1,
    lpSymbol: 'NEON-ICE',
    lpAddress: '0xE6aFb3448F3bC6EC09A55A8722b97410DAa81517',
    token: neonTokens.ice,
    quoteToken: neonTokens.wneon,
  },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
