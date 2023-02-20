import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const coreTokens = {  // todo: add bridged CORE tokens
  wcore: WETH9[ChainId.CORE],
  ice: new ERC20Token(ChainId.CORE, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.CORE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'USDT', 'Tether USD'),
  huc: new ERC20Token(ChainId.CORE, '0x5EE2c2aE144218b52CF756c0907bA384C7E35fba', 18, 'HUC', 'Hobo Universe'),
}
