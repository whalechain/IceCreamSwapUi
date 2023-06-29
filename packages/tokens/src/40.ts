import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const telosTokens = {
  wtlos: WETH9[ChainId.TELOS],
  ice: new ERC20Token(ChainId.TELOS, '0xB25cB6a275a8D6a613228FB161eB3627b50EB696', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.TELOS, '0xc57F0eb99363e747D637B17BBdB4e1AB85e60631', 18, 'USDT', 'Tether USD'),
}
