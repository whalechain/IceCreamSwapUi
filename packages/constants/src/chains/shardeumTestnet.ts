import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const shardeumTestnet: IceChain = {
  id: 8081,
  name: 'Shardeum(Testnet)',
  features: ['swap'],
  network: 'shardeumTestnet',
  rpcUrls: {
    public: 'https://dapps.shardeum.org',
    default: 'https://dapps.shardeum.org',
  },
  blockExplorers: {
    default: { name: 'Shardeum(Testnet) Explorer', url: 'https://explorer-dapps.shardeum.org' },
  },
  nativeCurrency: {
    name: 'Shardeum',
    symbol: 'SHM',
    decimals: 18,
  },
  multicall: {
    address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
    blockCreated: 5377,
  },
  blockInterval: 60,
  wrappedNative: {
    address: '0x1DAcbaB28Decd115c8AA6F183877C71b942aE406',
    decimals: 18,
    symbol: 'WSHM',
    name: 'Wrapped Shardeum',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
}
