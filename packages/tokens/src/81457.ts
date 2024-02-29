import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const blastTokens = {
  weth: WETH9[ChainId.BLAST],
  ice_b: new ERC20Token(ChainId.BLAST, '0x24cb308a4e2F3a4352F513681Bd0c31a0bd3BA31', 18, 'ICE_B', 'IceCream[Blast]', 'https://icecreamswap.com'),
}
