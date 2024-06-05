import { FACTORY_ADDRESS, INIT_CODE_HASH, ROUTER_ADDRESS } from "../common/swap";
import IceChain from '../ice-chain'

const fortresschainExplorer = { name: 'Explorer', url: 'https://explorer.fortresschain.finance' }

export const core: IceChain = {
  id: 372,
  visible: true,
  name: 'Fortress Chain',
  // features: ['swap', 'swapV3', 'farms', 'farmsV3', 'info', 'infoV3', 'bridge', 'locks', 'staking', 'kyc', 'launchpad', 'tokenDeployer'],
  features: ['swap', 'swapV3'],
  network: 'fortress',
  rpcUrls: {
    public: { http: ['https://rpc.fortresschain.finance'] },
    default: { http: ['https://rpc.fortresschain.finance'] },
  },
  blockExplorers: {
    default: fortresschainExplorer,
    etherscan: fortresschainExplorer,
  },
  nativeCurrency: {
    name: 'FortressChain Native Token',
    symbol: 'FTSC',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0x5288B80d6d23e5DC2CAC62d2cfE43985313CE5C0',
      blockCreated: 432,
    },
  },
  // tokenDeployerDividend: {
  //   address: '0x5c39F20A0d75Cc8695cfBa8d97178aB64e60d848',
  //   feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  // },
  // locks: {
  //   factoryAddress: '0xFDfD00471d8bebA97B40f5D1599b7A84C16dd7d2',
  //   factoryAddress2: '0xA48E76d95619f4c9838Df19FDeE690a06581b5dD',
  // },
  blockInterval: 3,
  wrappedNative: {
    address: '0x0cD0Cf75E4696bd531cde0FAFb73c22b4985bcEC',
    decimals: 18,
    symbol: 'wFTSC',
    name: 'Wrapped FTSC',
  },
  iceAddress: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  stableToken: {
    address: '0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD (CORE Bridge)',
  },
  swap: {
    factoryAddress: '0x0f8a3f52fEF4a9a810A2D97F7909a438e519E07b',
    routerAddress: '0xceeE5004344DD69de1132AFba49cA05Dce593E7f',
    initCodeHash: '0x8e3103f27f962fa2837ea8d0411124f602256d5f26e5116033f8d1e1195d177d',
    // deploymentTs: 1675828800,
  },
  smartRouterAddress: '0xBd8BB286Cd14124720F3f8C5F3fdD7fa13735Dc2',
  // farmV2Address: '0xe3277bb0f3C4b9C6FC1DBf81E328E14F3C9368C3',
  // campaignFactory: '0x79218D6d562a435ec258f2f4D8D17f1DEbbb114a',
  // kyc: {
  //   feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  //   fee: 10,
  //   feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E',
  //   contractKyced: '0x913E332d552b98355587BBa82b1256BCAdbCeD48',
  //   contractKycDelegator: '0x682EAb822E5896dF1cD33C1Cd6EE99a3154Dd47E',
  //   contractKycDelegations: '0x790C138B110Bfb517cE5FaB8CF1a51ffDaAa9754',
  // },
  // v3SubgraphStart: 9212906,
}