import { SerializedFarmConfig } from '@pancakeswap/farms'
import { coreTokens } from '@pancakeswap/tokens'

const farms: SerializedFarmConfig[] = [
    {
        pid: 6,
        lpSymbol: 'SCORE-CORE LP',
        lpAddress: '0x876C62C8C94ca04aFE45a9Ef9DB39799D3CddF34',
        token: coreTokens.score,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: 9,
        lpSymbol: 'ICE-SCORE LP',
        lpAddress: '0xa2710913b9a9a0a34d87bd8a9cf91e8f533ecac7',
        token: coreTokens.ice,
        quoteToken: coreTokens.score,
    },
    {
        pid: 0,
        lpSymbol: 'ICE-USDT LP',
        lpAddress: '0xf1a996efba43dcbd7945d2b91fa78420d9c23bf0',
        token: coreTokens.ice,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: 10,
        lpSymbol: 'SCORE-USDT LP',
        lpAddress: '0x64ead682Ce296B1167d614AEF19bE58F7BAa7288',
        token: coreTokens.score,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: 1,
        lpSymbol: 'CORE-USDT LP',
        lpAddress: '0x5ebAE3A840fF34B107D637c8Ed07C3D1D2017178',
        token: coreTokens.usdt,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: 3,
        lpSymbol: 'ICE-USDC LP',
        lpAddress: '0x3BEC22289EA5E8Ef13e3Ddf536306193F19449B5',
        token: coreTokens.usdc,
        quoteToken: coreTokens.ice,
    },
    {
        pid: 4,
        lpSymbol: 'ICE-ETH LP',
        lpAddress: '0x53c55f7CA1B99bed1F8E3C876992abE28d91187A',
        token: coreTokens.eth,
        quoteToken: coreTokens.ice,
    },
    {
        pid: 5,
        lpSymbol: 'ICE-BNB LP',
        lpAddress: '0x69dE3b3fbbC5AA0201a8028F90cE5eebfCD0cBd3',
        token: coreTokens.bnb,
        quoteToken: coreTokens.ice,
    },
    {
        pid: 11,
        lpSymbol: 'CTOMB-SCORE LP',
        lpAddress: '0x529be42298329b3296b591ea3e5e48af0d99ef53',
        token: coreTokens.ctomb,
        quoteToken: coreTokens.score,
    },
    {
        pid: 12,
        lpSymbol: 'CSHARE-SCORE LP',
        lpAddress: '0x0954069e3e8cd91bea14dfce40f51a46e71e3454',
        token: coreTokens.cshare,
        quoteToken: coreTokens.score,
    },
    {
        pid: 2,
        lpSymbol: 'CORE-HUC LP',
        lpAddress: '0xA51C53fb5B6Ce3755a03AeFa86dFE8340850e33c',
        token: coreTokens.huc,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: 7,
        lpSymbol: 'CKISHU-CORE LP',
        lpAddress: '0xb737cb83f5e7c365b95e54517f37a67eb3de88a6',
        token: coreTokens.kishu,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: 8,
        lpSymbol: 'CoreShib-USDT LP',
        lpAddress: '0x77d1e8bfcb738039cbfe70390e8e9c9b28829167',
        token: coreTokens.cshib,
        quoteToken: coreTokens.usdt,
    }
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
