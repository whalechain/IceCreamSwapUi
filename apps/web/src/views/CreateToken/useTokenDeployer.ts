// import tokenDeployerAbi from '@passive-income/launchpad-contracts/abi/contracts/PSIPadTokenDeployer.sol/PSIPadTokenDeployer.json'
// import { PSIPadTokenDeployer } from '@passive-income/launchpad-contracts/typechain/PSIPadTokenDeployer'
import tokenDeployerAbi from './tokenDeployerAbi.json'
import { DividendTokenDeployer } from '@icecreamswap/contracts/projects/token-deployer/typechain/contracts/dividendTokenDeployer.sol'
import { BigNumber } from 'ethers'
import { useActiveChain } from 'hooks/useActiveChain'
import { useContract } from 'hooks/useContract'
import { useEffect, useState } from 'react'

const useTokenDeployerDividend = () => {
  const chain = useActiveChain()
  const tokenDeployerAddress = chain?.tokenDeployerDividend?.address
  const tokenDeployer = useContract<DividendTokenDeployer>(tokenDeployerAddress, tokenDeployerAbi, true)
  return tokenDeployer
}

export const useDeploymentFee = () => {
  const deployer = useTokenDeployerDividend()
  const [feeAmount, setFeeAmount] = useState<BigNumber>()

  useEffect(() => {
    if (deployer) {
      deployer.iceFee().then(setFeeAmount)
    }
  }, [deployer])
  const chain = useActiveChain()

  return {
    feeAmount,
    feeToken: chain?.tokenDeployerDividend?.feeToken,
    deployerAddress: chain?.tokenDeployerDividend?.address,
  }
}

export default useTokenDeployerDividend
