import { useGasPrice } from 'state/user/hooks'
import makeHandleDeposit from '../contracts/makeHandleDeposit'
import { useBridge } from '../BridgeProvider'
import { useSigner } from 'wagmi'
import { ERC20Token } from '@pancakeswap/sdk'
import { Web3Provider } from '@ethersproject/providers'

export const useDeposit = (bridgeFee?: number, bridgeFeeToken?: string) => {
  const gasPrice = useGasPrice()
  const { setTransactionStatus, setDepositNonce, setHomeTransferTxHash, homeChainConfig, bridge, currency } =
    useBridge()
  const signer = useSigner()

  return makeHandleDeposit(
    setTransactionStatus,
    setDepositNonce,
    setHomeTransferTxHash,
    parseFloat(gasPrice?.toString() || '0'),
    homeChainConfig,
    bridge,
    signer?.data?.provider as Web3Provider,
    currency instanceof ERC20Token ? currency.address : undefined,
    bridgeFee,
    bridgeFeeToken,
  )
}
