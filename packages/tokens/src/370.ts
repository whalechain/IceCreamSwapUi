import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'

export const coreTokens = {
  wcore: WETH9[ChainId.CORE],
  wcore_old: new ERC20Token(ChainId.CORE, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f', 18, 'WCORE', 'WrappedCoreOld'),
  core: new ERC20Token(ChainId.CORE, '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',18,'CORE','CORE'),
}
