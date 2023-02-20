import { chains } from '@icecreamswap/constants'
import { useWeb3React } from '@pancakeswap/wagmi'

export const useActiveChain = () => {
  const { chainId } = useWeb3React()
  return chains.find((chain) => chain.id === chainId) || chains[0]
}
