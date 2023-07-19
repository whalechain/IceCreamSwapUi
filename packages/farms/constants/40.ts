import { SerializedFarmConfig } from '@pancakeswap/farms'
import { telosTokens } from "@pancakeswap/tokens";

const farms: SerializedFarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'ICE-USDT LP',
    lpAddress: '0xCA393dfA16c590a79a7419176B097aE12F5726f1',
    token: telosTokens.ice,
    quoteToken: telosTokens.usdt,
  },
  {
    pid: 1,
    lpSymbol: 'ICE-TLOS LP',
    lpAddress: '0xe6c634a64e35Cf35879126f8dA952AAa7B7C51eb',
    token: telosTokens.wtlos,
    quoteToken: telosTokens.ice,
  },
  {
    pid: 3,
    lpSymbol: 'TLOS-USDT LP',
    lpAddress: '0x86CA8345bDa0D6052E93f07BE4dcC680Af927d53',
    token: telosTokens.wtlos,
    quoteToken: telosTokens.usdt,
  },
  {
    pid: 2,
    lpSymbol: 'TLOS-USDT(Multichain.org) LP',
    lpAddress: '0x722A5e8adbCD9929ebe8Bc6BE916F827823Ae65e',
    token: telosTokens.usdt_m,
    quoteToken: telosTokens.wtlos,
  }
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
