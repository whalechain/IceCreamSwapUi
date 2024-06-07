import IceChain from '../ice-chain'

export const fortress: IceChain = {
  id: 372,
  visible: true,
  name: 'Fortress Network',
  features: ['swap'],
  network: 'fortress',
  rpcUrls: {
    public: { http: ['https://rpc.fortresschain.finance/'] },
    default: { http: ['https://rpc.fortresschain.finance/'] },
  },
  blockExplorers: {
    default: { name: 'Fortress Explorer', url: 'https://explorer.fortresschain.finance' },
  },
  nativeCurrency: {
    name: 'FTSC',
    symbol: 'FTSC',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x5288B80d6d23e5DC2CAC62d2cfE43985313CE5C0',
      blockCreated: 38175,
    },
  },
  blockInterval: 10,
  wrappedNative: {
    address: '0x0cD0Cf75E4696bd531cde0FAFb73c22b4985bcEC',
    decimals: 18,
    symbol: 'wFTSC',
    name: 'Wrapped FTSC',
  },
  iceAddress: '0x2fF506ed9729580EF8Bf04429614beB1baE5F76D',
  stableToken: {
    address: '0xf40A97b039cCbC35a3cd0F073Bcd328Cc8C85879',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0x0f8a3f52fEF4a9a810A2D97F7909a438e519E07b',
    routerAddress: '0xceeE5004344DD69de1132AFba49cA05Dce593E7f',
    initCodeHash: '0x8e3103f27f962fa2837ea8d0411124f602256d5f26e5116033f8d1e1195d177d',
    deploymentTs: 1716545743,
  },
}
