import { Bridge } from '@chainsafe/chainbridge-contracts'
import { providers, BigNumber, utils, constants as ethersConstants } from 'ethers'
import type { TransactionStatus } from '../BridgeProvider'
import { BridgeChain, bridgeChains } from '../config'
import { Erc20DetailedFactory } from './Erc20DetailedFactory'

import { getPriceCompatibility } from './helpers'

const makeHandleDeposit =
  (
    setTransactionStatus: (message: TransactionStatus | undefined) => void,
    setDepositNonce: (input: string | undefined) => void,
    setHomeTransferTxHash: (input: string) => void,
    gasPrice: number,
    homeChainConfig?: BridgeChain,
    homeBridge?: Bridge,
    provider?: providers.Web3Provider,
    address?: string,
    bridgeFee?: number,
    bridgeFeeToken?: string,
  ) =>
  async (amount: number, recipient: string, tokenAddress: string, destinationChainId: number) => {
    if (!homeChainConfig || !homeBridge) {
      console.error('Home bridge contract is not instantiated')
      return
    }
    const signer = provider?.getSigner()
    if (!address || !signer) {
      console.log('No signer')
      return
    }

    const destinationChain = bridgeChains.find((c) => c.domainId === destinationChainId)
    const token = homeChainConfig.tokens.find((t) => t.address === tokenAddress)

    if (!token) {
      console.log('Invalid token selected')
      return
    }

    setTransactionStatus('Initializing Transfer')
    const erc20 = Erc20DetailedFactory.connect(tokenAddress, signer)
    const isNative = token.address === '0x0000000000000000000000000000000000000000'

    const erc20Decimals = isNative ? 18 : await erc20.decimals()

    const amountBN = BigNumber.from(utils.parseUnits(amount.toString(), erc20Decimals))

    const data = `0x${utils.hexZeroPad(amountBN.toHexString(), 32).substr(2) /* Deposit Amount (32 bytes) */}${
      utils.hexZeroPad(utils.hexlify((recipient.length - 2) / 2), 32).substr(2) /* len(recipientAddress) (32 bytes) */
    }${
      recipient.substring(2) // recipientAddress (?? bytes)
    }`

    try {
      const gasPriceCompatibility = await getPriceCompatibility(provider, homeChainConfig, gasPrice)

      const handlerAddress = await homeBridge._resourceIDToHandlerAddress(token.resourceId)
      const currentAllowance = isNative ? 0 : await erc20.allowance(address, handlerAddress)
      console.log('🚀  currentAllowance', utils.formatUnits(currentAllowance, erc20Decimals))
      // TODO extract token allowance logic to separate function
      if (!isNative && Number(utils.formatUnits(currentAllowance, erc20Decimals)) < amount) {
        if (Number(utils.formatUnits(currentAllowance, erc20Decimals)) > 0) {
          // We need to reset the user's allowance to 0 before we give them a new allowance
          setTransactionStatus('Approve 0')
          await (
            await erc20.approve(handlerAddress, BigNumber.from(utils.parseUnits('0', erc20Decimals)), {
              gasPrice: gasPriceCompatibility,
            })
          ).wait(1)
        }
        setTransactionStatus('Approve')
        await (
          await erc20.approve(
            handlerAddress,
            ethersConstants.MaxUint256, // BigNumber.from(utils.parseUnits(amount.toString(), erc20Decimals)),
            {
              gasPrice: gasPriceCompatibility,
            },
          )
        ).wait(1)
      }

      setTransactionStatus('Deposit')

      let value = BigNumber.from(0)
      if (isNative) {
        value = amountBN
      } else if (bridgeFee && bridgeFeeToken === '0x0000000000000000000000000000000000000000') {
        value = utils.parseUnits(bridgeFee.toString(), 18)
      }

      const depositTransaction = await homeBridge.deposit(destinationChainId, token.resourceId, data, {
        gasPrice: gasPriceCompatibility,
        value,
      })
      const depositReceipt = await depositTransaction.wait()
      setHomeTransferTxHash(depositTransaction.hash)
      const depositEvent = depositReceipt.events!.find((event) => event.event === 'Deposit')
      setDepositNonce(`${depositEvent!.args!.depositNonce.toString()}`)
      setTransactionStatus('In Transit')

      return
    } catch (error) {
      console.error(error)
      setTransactionStatus('Transfer Aborted')
    }
  }

export default makeHandleDeposit
