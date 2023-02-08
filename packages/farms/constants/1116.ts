import { SerializedFarmConfig } from '@pancakeswap/farms'
import { coreTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'ICE-USDT LP',
        lpAddress: '0xf1a996efba43dcbd7945d2b91fa78420d9c23bf0',
        token: coreTokens.ice,
        quoteToken: coreTokens.usdt,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
