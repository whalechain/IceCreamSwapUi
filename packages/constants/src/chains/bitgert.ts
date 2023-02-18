import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const bitgert: IceChain = {
  id: 32520,
  name: 'Bitgert Mainnet',
  features: ['swap', 'bridge', 'info', 'farms', 'staking'],
  network: 'bitgert',
  rpcUrls: {
    public: 'https://rpc.icecreamswap.com',
    default: 'https://rpc.icecreamswap.com',
  },
  blockExplorers: {
    default: { name: 'Brisescan', url: 'https://brisescan.com' },
  },
  nativeCurrency: {
    name: 'Brise',
    symbol: 'Brise',
    decimals: 18,
  },
  multicall: {
    address: '0x2490b172F7de4f518713fB03E6D3f57B558c9964',
    blockCreated: 1541584,
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
  wrappedNative: {
    address: '0x0eb9036cbE0f052386f36170c6b07eF0a0E3f710',
    decimals: 18,
    symbol: 'WBRISE',
    name: 'Wrapped Brise',
  },
}
