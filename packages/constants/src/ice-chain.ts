import { Chain } from "wagmi";
import { Address, Hash } from 'viem'

type ChainFeature = 'swap' | 'swapV3' | 'bridge' | 'info' | 'farms' | 'farmsV3' | 'staking' | 'locks' | 'launchpad' | 'tokenDeployer' | 'akkaRouter' | 'kyc'

interface SwapConfig {
  factoryAddress: Address
  routerAddress: Address
  initCodeHash: Hash
}

interface SwapAkkaConfig {
  routerAddress: Address
  routerAddressV3?: Address
}

interface LocksConfig {
  factoryAddress: Address
  factoryAddress2?: Address
}

interface TokenDeployerConfig {
  address: Address
  feeToken: Address
}

interface KycConfig {
  feeToken: Address
  fee: number
  feeWallet: Address
  contractKyced?: Address
  contractKycDelegator?: Address
  contractKycDelegations?: Address
}

interface ChainBase {
  features: ChainFeature[]
  swap?: SwapConfig
  swapAkka?: SwapAkkaConfig
  locks?: LocksConfig
  tokenDeployerDividend?: TokenDeployerConfig
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
