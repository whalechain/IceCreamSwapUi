import {ChainId, ERC20Token, WETH9} from '@pancakeswap/sdk'

export const coreTokens = {  // todo: add bridged CORE tokens
  wcore: WETH9[ChainId.CORE],
  ice: new ERC20Token(ChainId.CORE, '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44', 18, 'ICE', 'IceCream', 'https://icecreamswap.com'),
  usdt: new ERC20Token(ChainId.CORE, '0x81bCEa03678D1CEF4830942227720D542Aa15817', 18, 'USDT', 'Tether USD'),
  huc: new ERC20Token(ChainId.CORE, '0x5EE2c2aE144218b52CF756c0907bA384C7E35fba', 18, 'HUC', 'Hobo Universe'),
  aicore: new ERC20Token(ChainId.CORE, '0x7621c97683A3b0499EC156bD257E44175e793bb1', 9, 'AICore', 'AI CORE TOKEN'),
  bcore: new ERC20Token(ChainId.CORE, '0xBFa14641bf0fE84dE3fcf3Bf227900af445f09C3', 18, 'Bcore', 'Big Core'),
  kishu: new ERC20Token(ChainId.CORE, '0xb2172C92e22F09Bc7d15C4B1790c7704f8429d14', 18, 'CKISHU', 'Core Kishu'),
}
