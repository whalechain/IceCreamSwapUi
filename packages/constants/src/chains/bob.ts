import IceChain from '../ice-chain'

export const bob: IceChain = {
  id: 60808,
  name: 'BOB',
  features: ['swap'],
  network: 'bob',
  rpcUrls: {
    public: { http: ['https://rpc.gobob.xyz',] },
    default: { http: ['https://rpc.gobob.xyz',] },
  },
  blockExplorers: {
    default: { name: 'BOB Explorer', url: 'https://explorer.gobob.xyz' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 48619,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0x4200000000000000000000000000000000000006',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0x05D032ac25d322df992303dCa074EE7392C117b9',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: "0x3D4440F335060a0341C9E6C3bBeE85E552505FFF",
    initCodeHash: "0x0b6b499b70a5c571677814eaf859942ef2336f97496a25dfb5a151a02e7f1c5d",
    routerAddress: "0xe0627818b29D2f28E62f54bC988E6e02C8dbC300",
  },
  smartRouterAddress: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D',
}
