import { ChainId, WETH9, ERC20Token } from '@pancakeswap/sdk'
import {ICE} from "./common";

export const dokenTokens = {
  wdkn: WETH9[ChainId.DOKEN],
  ice: ICE[ChainId.DOKEN],
  usdt: new ERC20Token(ChainId.DOKEN, '0x8e6dAa037b7F130020b30562f1E2a5D02233E6c5', 18, 'USDT', 'Tether USD'),
}
