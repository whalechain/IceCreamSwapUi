import { Chain } from "wagmi";
import { Address, Hash } from 'viem'

type ChainFeature = 'swap' | 'bridge' | 'info' | 'farms' | 'farmsV3' | 'staking' | 'locks'

interface SwapConfig {
  factoryAddress: Address
  routerAddress: Address
  initCodeHash: Hash
}

interface LocksConfig {
  factoryAddress: Address
  factoryAddress2?: Address
}

interface TokenDeployerConfig {
  address: Address
}

interface KycConfig {
  stableCoin: Address
  fee: number
  feeWallet: Address
  tokenAddress: Address
  contractKycMinter: Address
  contractKycAddress: Address
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  locks?: LocksConfig
  tokenDeployer?: TokenDeployerConfig
  blockInterval: number
  wrappedNative: {
    name: string
    symbol: string
    address: Address
    decimals: number
  }
  campaignFactory?: Address
  kyc?: KycConfig
}

type IceChain = ChainBase & Chain

export default IceChain
