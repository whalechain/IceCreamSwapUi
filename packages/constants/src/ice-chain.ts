import { Chain } from 'wagmi'

type ChainFeature = 'swap' | 'bridge' | 'info' | 'farms' | 'staking' | 'kyc' | 'locks' | 'launchpad' | 'tokenDeployer' | 'akkaRouter'

interface SwapConfig {
  factoryAddress: string
  initCodeHash: string
}

interface LocksConfig {
  factoryAddress: string
  factoryAddress2?: string
}

interface TokenDeployerConfig {
  address: string
  feeToken: string
}

interface KycConfig {
  feeToken: string
  fee: number
  feeWallet: string
  contractKyced?: string
  contractKycDelegator?: string
  contractKycDelegations?: string
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  locks?: LocksConfig
  tokenDeployerDividend?: TokenDeployerConfig
  blockInterval: number
  wrappedNative: {
    name: string
    symbol: string
    address: string
    decimals: number
  }
  campaignFactory?: string
  kyc?: KycConfig
}

type IceChain = ChainBase & Chain

export default IceChain
