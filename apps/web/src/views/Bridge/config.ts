import {Address} from "viem";

const chains = [
  {
    domainId: 1,
    networkId: 56,
    name: 'BinanceSmartChain',
    decimals: 18,
    bridgeAddress: '0x3D4440F335060a0341C9E6C3bBeE85E552505FFF' as Address,
    rpcUrl: 'https://binance.llamarpc.com',
    type: 'Ethereum',
    nativeTokenSymbol: 'BNB',
    tokens: [
      {
        address: '0xce6c9c70f91c6797873EFC80505f972290A88f5D' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8' as Address,
        name: 'Ether',
        symbol: 'ETH',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xeA61Dc96F105469522d39cBF7bD59b42393678F7/logo.png',
        resourceId: '0x00000000000000000000002170Ed0880ac9A755fd29B2688956BD959F933F801',
      },
      {
        address: '0x55d398326f99059fF775485246999027B3197955' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 2,
    networkId: 32520,
    name: 'Bitgert',
    decimals: 18,
    bridgeAddress: '0x6A6A2C9A9e9dDf3a6D76B8e1d05701d7D57596B8' as Address,
    rpcUrl: 'https://rpc.icecreamswap.com',
    type: 'Ethereum',
    nativeTokenSymbol: 'Brise',
    tokens: [
      {
        address: '0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xC7E6d7E08A89209F02af47965337714153c529F0' as Address,
        name: 'Tether USD IceCream',
        symbol: 'USDTi',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 6,
    networkId: 50,
    name: 'XDC',
    decimals: 18,
    bridgeAddress: '0x7D5a56742C082FcDfc240cd7D1775f00e059771F' as Address,
    rpcUrl: 'https://erpc.xinfin.network',
    type: 'Ethereum',
    nativeTokenSymbol: 'XDC',
    tokens: [
      {
        address: '0x54051D9DbE99687867090d95fe15C3D3E35512Ba' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc57F0eb99363e747D637B17BBdB4e1AB85e60631' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 7,
    networkId: 1116,
    name: 'CORE',
    decimals: 18,
    bridgeAddress: '0x88cD606B63C4665499ad0d47d4685d2ffc78e2Be'  as Address,
    rpcUrl: 'https://rpc-core.icecreamswap.com',
    type: 'Ethereum',
    nativeTokenSymbol: 'CORE',
    tokens: [
      {
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0x12AA82525DEfF84777fa78578A68ceB854A85f43' as Address,
        name: 'BNB',
        symbol: 'BNB',
        imageUri:
            'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x74446a7418BFbFCDe3F1f6bCaFFA097d050a6dD8/logo.png',
        resourceId: '0x0000000000000000000000bb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c01',
      },
      {
        address: '0xeF6b7BC74C9354BCf2e3F2A068e4b0B5CDf08F29' as Address,
        name: 'Ether',
        symbol: 'ETH',
        imageUri:
            'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xeA61Dc96F105469522d39cBF7bD59b42393678F7/logo.png',
        resourceId: '0x00000000000000000000002170Ed0880ac9A755fd29B2688956BD959F933F801',
      },
      {
        address: '0x81bCEa03678D1CEF4830942227720D542Aa15817' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
            'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 9,
    networkId: 40,
    name: 'Telos',
    decimals: 18,
    bridgeAddress: '0xd65CceCFf339e5680b1A1E7821421932cc2b114f' as Address,
    rpcUrl: 'https://mainnet.telos.net/evm',
    type: 'Ethereum',
    nativeTokenSymbol: 'TLOS',
    tokens: [
      {
        address: '0xB25cB6a275a8D6a613228FB161eB3627b50EB696' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc57F0eb99363e747D637B17BBdB4e1AB85e60631' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
            'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 10,
    networkId: 8453,
    name: 'Base',
    decimals: 18,
    bridgeAddress: '0xd65CceCFf339e5680b1A1E7821421932cc2b114f' as Address,
    rpcUrl: 'https://developer-access-mainnet.base.org',
    type: 'Ethereum',
    nativeTokenSymbol: 'ETH',
    tokens: [
      {
        address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 11,
    networkId: 148,
    name: 'Shimmer',
    decimals: 18,
    bridgeAddress: '0x4ddC9394b8371765588B10134AA79472C1d42b16' as Address,
    rpcUrl: 'https://json-rpc.evm.shimmer.network',
    type: 'Ethereum',
    nativeTokenSymbol: 'SMR',
    tokens: [
      {
        address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 12,
    networkId: 534352,
    name: 'Scroll',
    decimals: 18,
    bridgeAddress: '0xd65CceCFf339e5680b1A1E7821421932cc2b114f' as Address,
    rpcUrl: 'https://rpc-scroll.icecreamswap.com',
    type: 'Ethereum',
    nativeTokenSymbol: 'ETH',
    tokens: [
      {
        address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 13,
    networkId: 245022934,
    name: 'Neon EVM',
    decimals: 18,
    bridgeAddress: '0x4ddC9394b8371765588B10134AA79472C1d42b16' as Address,
    rpcUrl: 'https://neon-proxy-mainnet.solana.p2p.org',
    type: 'Ethereum',
    nativeTokenSymbol: 'NEON',
    tokens: [
      {
        address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44' as Address,
        name: 'Tether USD',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xC7E6d7E08A89209F02af47965337714153c529F0/logo.png',
        resourceId: '0x0000000000000000000000C7E6d7E08A89209F02af47965337714153c529F001',
      },
    ],
  },
  {
    domainId: 15,
    networkId: 81457,
    name: 'Blast',
    decimals: 18,
    bridgeAddress: '0x575C065Bf1Fa9D6F0F94AAC620a6936dD8517c7D' as Address,
    rpcUrl: 'https://rpc.blast.io',
    type: 'Ethereum',
    nativeTokenSymbol: 'ETH',
    tokens: [
      {
        address: '0xD810A437e334B9C3660C18b38fB3C01000B91DD3' as Address,
        name: 'IceCream',
        symbol: 'ICE',
        imageUri: 'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02',
      },
      {
        address: '0x0000000000000000000000000000000000000001' as Address,
        name: 'Ether',
        symbol: 'ETH',
        imageUri:
          'https://icecreamswap-assets.s3.amazonaws.com/token/81457/0x4300000000000000000000000000000000000004.png',
        resourceId: '0x00000000000000000000002170Ed0880ac9A755fd29B2688956BD959F933F801',
      },
    ],
  },
]

export type BridgeChain = typeof chains[number]
export type TokenConfig = BridgeChain['tokens'][number]

export const bridgeChains = chains as BridgeChain[]
