import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const shardeumTestnetTokens = {
  wshm: WETH9[ChainId.SHARDEUM_TEST],
  ice: new ERC20Token(ChainId.SHARDEUM_TEST, '0xbd2e577dea54602c7c367fa144981c8aca6fd570', 18, 'ICE', 'IceCream'),
  usdt: new ERC20Token(ChainId.SHARDEUM_TEST, '0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42', 18, 'USDT', 'Tether USD'),
}
