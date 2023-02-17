import { Chain } from 'wagmi'

type ChainFeature = 'swap' | 'bridge' | 'info' | 'farms' | 'staking'

interface SwapConfig {
  factoryAddress: string
  initCodeHash: string
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  wrappedNative: {
    name: string
    symbol: string
    address: string
    decimals: number
  }
}

type IceChain = ChainBase & Chain

export default IceChain
