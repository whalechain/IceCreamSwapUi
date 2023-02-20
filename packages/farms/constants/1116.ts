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
    {
        pid: 1,
        lpSymbol: 'WCORE-USDT LP',
        lpAddress: '0x5ebAE3A840fF34B107D637c8Ed07C3D1D2017178',
        token: coreTokens.wcore,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: 2,
        lpSymbol: 'WCORE-HUC LP',
        lpAddress: '0xA51C53fb5B6Ce3755a03AeFa86dFE8340850e33c',
        token: coreTokens.huc,
        quoteToken: coreTokens.wcore,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
