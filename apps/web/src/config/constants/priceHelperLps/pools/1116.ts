import { SerializedFarmConfig } from '@pancakeswap/farms'
import { coreTokens } from '@pancakeswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x2d32d80bbefff482b0c58332590e7afe6c436979',
        token: coreTokens.aicore,
        quoteToken: coreTokens.wcore,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
