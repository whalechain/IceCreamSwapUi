import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'
import {ICE} from "./common";

export const bullstarTokens = {
  wbnb: WETH9[ChainId.BULLSTAR],
  ice: ICE[ChainId.BULLSTAR],
  usdt: new ERC20Token(ChainId.BULLSTAR, '0x55d398326f99059fF775485246999027B3197955', 18, 'USDT', 'Tether USD'),
}
