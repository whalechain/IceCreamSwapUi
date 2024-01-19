import { getAddress } from "viem";
import { SerializedFarmConfig } from '@pancakeswap/farms'
import { neonTokens } from '@pancakeswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x5008cb86d50a71192efff2b2888c836689ceaabc',
        token: neonTokens.chonk,
        quoteToken: neonTokens.wneon,
    },
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xe6afb3448f3bc6ec09a55a8722b97410daa81517',
        token: neonTokens.ice,
        quoteToken: neonTokens.wneon,
    },
].map((p) => ({
    ...p,
    token: p.token.serialize,
    quoteToken: p.quoteToken.serialize,
    lpAddress: getAddress(p.lpAddress),
}))

export default priceHelperLps