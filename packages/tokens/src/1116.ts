import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const coreTokens = {  // todo: add bridged CORE tokens
  wcore: WETH9[ChainId.CORE],
  ice: new ERC20Token(ChainId.XDC, '0x0000000000000000000000000000000000000000', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),  // todo: add ICE CORE address
  usdt: new ERC20Token(ChainId.XDC, '0x0000000000000000000000000000000000000000', 18, 'USDT', 'Tether USD'),  // todo: add USDT CORE address
}
