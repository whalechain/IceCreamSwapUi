import IceChain from '../ice-chain'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bullstar: IceChain = {
  id: 56,
  visible: true,
  name: 'Bull Star Finance',
  features: ['swap'],  // 'swap'
  network: 'bullstar',
  rpcUrls: {
    public: { http: ['https://rpc.ankr.com/bsc'] },
    default: { http: ['https://rpc.ankr.com/bsc'] },
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  blockInterval: 3,
  contracts: {
    multicall3: {
      address: '0xa9EBdf67793D7fA554b06F0d26399E906c4406aD',
      blockCreated: 38865987,
    },
  },
  wrappedNative: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  },
  iceAddress: '0xce6c9c70f91c6797873EFC80505f972290A88f5D',
  stableToken: {
    address: '0x55d398326f99059fF775485246999027B3197955',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0x1EdAA80EC049FB44F4c54Ed8942B64168378Ab00',
    initCodeHash: '0x3a7034d59e5b7ea8555ce70e496b0e187fb4e315ff1bf33bfd96d7c598c5205c',
    routerAddress: '0xe08EdE834633CB8300EE54B5e20f5172484A6C61',
  },
}
