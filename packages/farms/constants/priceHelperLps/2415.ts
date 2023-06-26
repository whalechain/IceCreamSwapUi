import { SerializedFarmConfig } from '@pancakeswap/farms'
import { xodexTokens } from '@pancakeswap/tokens'

const priceHelperLps: SerializedFarmConfig[] = [
    {
        pid: null,
        lpSymbol: '',
        lpAddress: '0xe3dd2db66c31b79ed7f4308a182262a904056a19',
        token: xodexTokens.usdt,
        quoteToken: xodexTokens.wxodex,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default priceHelperLps
