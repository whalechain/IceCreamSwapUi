import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

export const shardeumTestnet: IceChain = {
  id: 8082,
  name: 'Shardeum(Testnet)',
  features: ['swap'],
  network: 'shardeumTestnet',
  rpcUrls: {
    public: { http: ['https://sphinx.shardeum.org'] },
    default: { http: ['https://sphinx.shardeum.org'] },
  },
  blockExplorers: {
    default: { name: 'Shardeum(Testnet) Explorer', url: 'https://explorer-sphinx.shardeum.org' },
  },
  nativeCurrency: {
    name: 'Shardeum',
    symbol: 'SHM',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x7074ce83cb6b889a0ac896f3fc5636db732968e8',
      blockCreated: 57501,
    },
  },
  blockInterval: 60,
  wrappedNative: {
    address: '0xBb5e1777A331ED93E07cF043363e48d320eb96c4',
    decimals: 18,
    symbol: 'WSHM',
    name: 'Wrapped Shardeum',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
    routerAddress: ROUTER_ADDRESS,
  },
}
