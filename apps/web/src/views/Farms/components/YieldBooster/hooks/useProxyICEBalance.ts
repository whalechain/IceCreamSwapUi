import { useSWRContract } from 'hooks/useSWRContract'
import { getIceContract } from 'utils/contractHelpers'
import { getBalanceNumber } from '@pancakeswap/utils/formatBalance'
import { useBCakeProxyContractAddress } from 'views/Farms/hooks/useBCakeProxyContractAddress'
import BigNumber from 'bignumber.js'
import useAccountActiveChain from 'hooks/useAccountActiveChain'

const useProxyICEBalance = () => {
  const { account, chainId } = useAccountActiveChain()
  const { proxyAddress } = useBCakeProxyContractAddress(account, chainId)
  const cakeContract = getIceContract()

  const { data, mutate } = useSWRContract(proxyAddress && [cakeContract, 'balanceOf', [proxyAddress]])

  return {
    refreshProxyCakeBalance: mutate,
    proxyCakeBalance: data ? getBalanceNumber(new BigNumber(data.toString())) : 0,
  }
}

export default useProxyICEBalance
