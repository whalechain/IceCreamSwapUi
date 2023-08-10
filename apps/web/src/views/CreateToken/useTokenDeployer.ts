import tokenDeployerAbi from '@passive-income/launchpad-contracts/abi/contracts/PSIPadTokenDeployer.sol/PSIPadTokenDeployer.json'
import { PSIPadTokenDeployer } from '@passive-income/launchpad-contracts/typechain/PSIPadTokenDeployer'
import { useActiveChain } from 'hooks/useActiveChain'
import { useContract } from 'hooks/useContract'

const useTokenDeployerDividend = () => {
  const chain = useActiveChain()
  const tokenDeployerAddress = chain?.tokenDeployerDividend?.address
  const tokenDeployer = useContract<PSIPadTokenDeployer>(tokenDeployerAddress, tokenDeployerAbi, true)
  return tokenDeployer
}

export default useTokenDeployerDividend
