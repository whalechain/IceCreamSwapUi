import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'

export const shardeumTestnetTokens = {
  wshm: WETH9[ChainId.SHARDEUM_TEST],
  ice: new ERC20Token(ChainId.SHARDEUM_TEST, '0xb5C7882e37359572FD1cCFAA276e7Fdf70145D42', 18, 'ICE', 'IceCream'),
  usdt: new ERC20Token(ChainId.SHARDEUM_TEST, '0x43891084581fD07Ee1189f3a2f04e51c26a95B77', 18, 'USDT', 'Tether USD'),
}
