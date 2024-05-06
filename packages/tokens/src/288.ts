import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { ICE } from "./common";

export const bobaTokens = {
  weth: WETH9[ChainId.BOBA],
  ice: ICE[ChainId.BOBA],
  usdt: new ERC20Token(ChainId.BOBA, '0x7D5a56742C082FcDfc240cd7D1775f00e059771F', 18, 'USDT', 'Tether USD'),
}
