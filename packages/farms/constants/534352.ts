import { SerializedFarmConfig } from '@pancakeswap/farms'
import { scrollTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'USDT-ETH LP',
        lpAddress: '0x98182F51fAcEaca17cAe1aF7b0b94B1E2c2D1BA0',
        token: scrollTokens.weth,
        quoteToken: scrollTokens.usdt,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
