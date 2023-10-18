import { INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const scroll: IceChain = {
  id: 534352,
  name: 'Scroll',
  features: ['swap', 'bridge'],
  network: 'scroll',
  rpcUrls: {
    public: 'https://rpc.scroll.io',
    default: 'https://rpc.scroll.io',
  },
  blockExplorers: {
    default: { name: 'Scroll Explorer', url: 'https://scrollscan.com/' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  multicall: {
    address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
    blockCreated: 85060,
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0x5300000000000000000000000000000000000004',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  swap: {
    factoryAddress: "0x9e6d21e759a7a288b80eef94e4737d313d31c13f",
    initCodeHash: INIT_CODE_HASH,
  },
}
