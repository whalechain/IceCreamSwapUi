import IceChain from '../ice-chain'

export const boba: IceChain = {
  id: 288,
  name: 'Boba Network',
  features: ['swap', 'bridge'],
  network: 'boba',
  rpcUrls: {
    public: { http: ['https://mainnet.boba.network'] },
    default: { http: ['https://mainnet.boba.network'] },
  },
  blockExplorers: {
    default: { name: 'Boba Explorer', url: 'https://bobascan.com' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xb6D5B39F96d379569d47cC84024f3Cd78c5Ef651',
      blockCreated: 1138229,
    },
  },
  blockInterval: 3,
  wrappedNative: {
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  iceAddress: '0xd65CceCFf339e5680b1A1E7821421932cc2b114f',
  stableToken: {
    address: '0x7D5a56742C082FcDfc240cd7D1775f00e059771F',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0x1e61257E5298ED679cf1Dc9Dd0DE6391FE1736A1',
    routerAddress: '0xa6C4B4536E1182eE2691FCba7ABee54C456ed196',
    initCodeHash: '0x0b6b499b70a5c571677814eaf859942ef2336f97496a25dfb5a151a02e7f1c5d',
  }
}
