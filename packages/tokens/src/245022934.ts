import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'

export const neonTokens = {
  wneon: WETH9[ChainId.NEON],
  ice: new ERC20Token(ChainId.NEON, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.NEON, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'USDT', 'Tether USD'),
  chonk: new ERC20Token(ChainId.NEON, '0xF335ae40F387Bdc60477F0B306326A233D35227f', 18, 'CHONK', 'NeonChonk'),
}
