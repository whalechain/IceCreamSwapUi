import IceChain from '../ice-chain'

const fortresschainExplorer = { name: 'Explorer', url: 'https://explorer.whalechain.live' }

export const core: IceChain = {
  id: 370,
  visible: true,
  name: 'Whale Chain',
  // features: ['swap', 'swapV3', 'farms', 'farmsV3', 'info', 'infoV3', 'bridge', 'locks', 'staking', 'kyc', 'launchpad', 'tokenDeployer'],
  features: ['swap'],
  network: 'fortress',
  rpcUrls: {
    public: { http: ['https://rpc.whalechain.live'] },
    default: { http: ['https://rpc.whalechain.live'] },
  },
  blockExplorers: {
    default: fortresschainExplorer,
    etherscan: fortresschainExplorer,
  },
  nativeCurrency: {
    name: 'WhaleChain Native Token',
    symbol: 'FTSC',
    decimals: 18,
  },
  contracts: {
    multicall3: {
      address: '0xC1561cB8af64bAF6adCE7451e504d869C1Bf5BeA',
      blockCreated: 5366,
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
    address: '0xCC24119e80e582d744D040F030F49A80468A6707',
    decimals: 18,
    symbol: 'wWHALE',
    name: 'Wrapped WHALE',
  },
  iceAddress: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  stableToken: {
    address: '0x3d62674B6Ab8346D09f4574E86399DF256E995e8',
    decimals: 18,
    symbol: 'USDT',
    name: 'Tether USD (WHALE Bridge)',
  },
  swap: {
    factoryAddress: '0x4F14FcCb220dAbb82D5E109C391D9f62611ED266',
    routerAddress: '0xBAbBF1755340b58364962a25Db2d71c58c0F1041',
    initCodeHash: '0x900e0b44caa3cef1b67ea21e95e02996e60924aefe84a8edb87390593dbbc9f5',
    deploymentTs: 1717693698,
  },
  smartRouterAddress: '0xE7aeBEB3A455e25153341f7f7298460fFDFFB603',
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