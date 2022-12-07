import { SerializedFarmConfig } from '@pancakeswap/farms'
import { xdcTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'ICE-XDC LP',
        lpAddress: '0x1b42Bd5464812930146E78d5DAa69CF8669e463b',
        token: xdcTokens.ice,
        quoteToken: xdcTokens.usdt,
    },
    {
        pid: 1,
        lpSymbol: 'USDT-XDC LP',
        lpAddress: '0xe9450d66a493C3ae6eBC3Bb0B2B01a5107ea8bDb',
        token: xdcTokens.wxdc,
        quoteToken: xdcTokens.usdt,
    }
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
