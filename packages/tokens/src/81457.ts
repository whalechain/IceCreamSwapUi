import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const blastTokens = {
  weth: WETH9[ChainId.BLAST],
  ice: new ERC20Token(ChainId.BLAST, '0xD810A437e334B9C3660C18b38fB3C01000B91DD3', 18, 'ICE', 'IceCream'),
  usdb: new ERC20Token(ChainId.BLAST, '0x4300000000000000000000000000000000000003', 18, 'USDT', 'Blast USD'),
  ice_b: new ERC20Token(ChainId.BLAST, '0x24cb308a4e2F3a4352F513681Bd0c31a0bd3BA31', 18, 'ICE_B', 'IceCream[Blast]', 'https://icecreamswap.com'),
}
