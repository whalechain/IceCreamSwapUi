import { Address } from "viem";

const chains = [
  {
    domainId: 1,
    networkId: 56,
    name: 'BinanceSmartChain',
    decimals: 18,
    bridgeAddress: '0x3D4440F335060a0341C9E6C3bBeE85E552505FFF' as Address,
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
      {
        address: '0xebD3619642d78F0C98c84f6Fa9a678653fB5A99B' as Address,
        name: 'ASX',
        symbol: 'ASX',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xB28B43209d9de61306172Af0320f4f55e50E2f29/logo.png',
        resourceId: '0x000000000000000000000ebD3619642d78F0C98c84f6Fa9a678653fB5A99B001',
      },
      {
        address: '0xA4fb427C67DF2400315c794155401c7C998Ed97d' as Address,
        name: '3D City',
        symbol: '3DC',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0x5feDA75eaB27814Cba0694C9711F7d4abEa5b0b5/logo.png',
        resourceId: '0x00000000000000000000005feDA75eaB27814Cba0694C9711F7d4abEa5b0b502',
      },
    ],
  },
  {
    domainId: 7,
    networkId: 372,
    name: 'CORE',
    decimals: 18,
    bridgeAddress: '0x88cD606B63C4665499ad0d47d4685d2ffc78e2Be'  as Address,
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
      {
        address: '0xB28B43209d9de61306172Af0320f4f55e50E2f29' as Address,
        name: 'ASX',
        symbol: 'ASX',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/core/assets/0xB28B43209d9de61306172Af0320f4f55e50E2f29/logo.png',
        resourceId: '0x000000000000000000000ebD3619642d78F0C98c84f6Fa9a678653fB5A99B001',
      },
    ],
  },
]

export type BridgeChain = typeof chains[number]
export type TokenConfig = BridgeChain['tokens'][number]

export const bridgeChains = chains as BridgeChain[]
