import { Chain } from 'wagmi'

type ChainFeature = 'swap' | 'bridge' | 'info' | 'farms' | 'staking' | 'locks'

interface SwapConfig {
  factoryAddress: string
  initCodeHash: string
}

interface LocksConfig {
  factoryAddress: string
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  locks?: LocksConfig
  blockInterval: number
  wrappedNative: {
    name: string
    symbol: string
    address: string
    decimals: number
  }
}

type IceChain = ChainBase & Chain

export default IceChain
