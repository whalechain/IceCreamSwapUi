import { dokenTokens } from '@pancakeswap/tokens'
import { getAddress } from "viem";
import { SerializedFarmConfig } from "../src";

const farms: SerializedFarmConfig[] = [
    {
        pid: 0,
        lpSymbol: 'ICE-USDT LP',
        lpAddress: '0x97a0f0abf50427bea485325277a2d25e44fac2b6',
        token: dokenTokens.ice,
        quoteToken: dokenTokens.wdkn,
    },
    {
        pid: 1,
        lpSymbol: 'USDT-DOKN LP',
        lpAddress: '0x3ef68d91d420fecc9bbb1b95382f14a19de3f3bb',
        token: dokenTokens.wdkn,
        quoteToken: dokenTokens.usdt,
    },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize, lpAddress: getAddress(p.lpAddress), }))

export default farms
