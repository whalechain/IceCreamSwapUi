import { getAddress } from "viem";
import { SerializedFarmConfig } from '@pancakeswap/farms'
import { neonTokens } from '@pancakeswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0x5008cb86d50a71192efff2b2888c836689ceaabc',
        token: neonTokens.wneon,
        quoteToken: neonTokens.chonk,
    },

].map((p) => ({
    ...p,
    token: p.token.serialize,
    quoteToken: p.quoteToken.serialize,
    lpAddress: getAddress(p.lpAddress),
}))

export default priceHelperLps