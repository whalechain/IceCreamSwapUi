import IceChain from '../ice-chain'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: IceChain = {
  id: 56,
  name: 'BNB Smart Chain Mainnet',
  features: ['bridge'],
  network: 'binance',
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
      address: '0xcA11bde05977b3631167028862bE2a173976CA11',
      blockCreated: 15921452,
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
    address: '0x55d398326f99059ff775485246999027b3197955',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD',
  },
}
