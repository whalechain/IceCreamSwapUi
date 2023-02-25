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
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xcadda376b2840094cf6efa16a4c8483d6064adee',
        token: coreTokens.bcore,
        quoteToken: coreTokens.usdt,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xb737cb83f5e7c365b95e54517f37a67eb3de88a6',
        token: coreTokens.kishu,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x087E0c6547f9dA7F89AFDd8e4b08541959Bd4462',
        token: coreTokens.gte,
        quoteToken: coreTokens.wcore,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x1609775ef02856E4fA83BDa833e8975cA1EA091F',
        token: coreTokens.word,
        quoteToken: coreTokens.wcore,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
