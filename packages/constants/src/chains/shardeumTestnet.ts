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
      address: '0xBD2e577dEa54602C7c367fa144981c8ACA6FD570',
      blockCreated: 57501,
    },
  },
  blockInterval: 60,
  wrappedNative: {
    address: '0x5eB65C6feC23d4eb36bC9966aA110Fe13FBd7c7F',
    decimals: 18,
    symbol: 'WSHM',
    name: 'Wrapped Shardeum',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
    routerAddress: "0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62",
  },
}
