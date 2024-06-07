import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const bscTokens = {
  wbnb: WETH9[ChainId.BSC],
  usdt: new ERC20Token(ChainId.BSC, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD'),
}
