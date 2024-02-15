import {FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS} from '../common/swap'
import IceChain from '../ice-chain'

export const neon: IceChain = {
  id: 245022934,
  name: 'Neon EVM Blockchain',
  features: ['swap', 'bridge', 'staking', 'farms'],
  network: 'neon',
  rpcUrls: {
    public: { http: ['https://neon-proxy-mainnet.solana.p2p.org'] },
    default: { http: ['https://neon-proxy-mainnet.solana.p2p.org'] },
  },
  blockExplorers: {
    default: { name: 'Neon EVM Explorer', url: 'https://neonscan.org' },
  },
  nativeCurrency: {
    name: 'Neon EVM',
    symbol: 'NEON',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
      blockCreated: 236956242,
    },
  },
  blockInterval: 0.4,
  wrappedNative: {
    address: '0x202C35e517Fa803B537565c40F0a6965D7204609',
    decimals: 18,
    symbol: 'WNEON',
    name: 'Wrapped NEON',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    routerAddress: ROUTER_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
}
