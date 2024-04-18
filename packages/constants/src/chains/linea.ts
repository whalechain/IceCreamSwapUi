import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

export const linea: IceChain = {
  id: 59144,
  name: 'Linea',
  features: ['swap'],
  network: 'linea',
  rpcUrls: {
    public: { http: ['https://linea-mainnet.infura.io/v3/',] },
    default: { http: ['https://linea-mainnet.infura.io/v3/',] },
  },
  blockExplorers: {
    default: { name: 'Linea Mainnet Explorer', url: 'https://lineascan.build' },
  },
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf8ac4BEB2F75d2cFFb588c63251347fdD629B92c',
      blockCreated: 3797700,
    },
  },
  blockInterval: 2,
  wrappedNative: {
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    decimals: 18,
    symbol: 'WETH',
    name: 'Wrapped Ether',
  },
  stableToken: {
    address: '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    decimals: 6,
    symbol: 'USDT',
    name: 'Tether USD',
  },
  swap: {
    factoryAddress: '0xC87De04e2EC1F4282dFF2933A2D58199f688fC3d',
    initCodeHash: '0x0b6b499b70a5c571677814eaf859942ef2336f97496a25dfb5a151a02e7f1c5d',
    routerAddress: '0xE578184bC88EB48485Bba23a37B5509578d2aE38',
  },
  smartRouterAddress: '0x16A3247Db4588176c24C6A5F6d3fd2C174122DF5'
}