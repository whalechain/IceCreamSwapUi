import { ERC20Token } from '@pancakeswap/sdk'
import { Flex, Modal, useModalContext, Text, ArrowDownIcon, Button, Spinner } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/Logo'
import { ChainLogo } from 'components/Logo/ChainLogo'
import Divider from 'views/Farms/components/Divider'
import { useBridge } from '../BridgeProvider'
import type { TransactionStatus } from '../BridgeProvider'
import { formatAmount } from '../formatter'
import { useDeposit } from '../hooks/useDeposit'

interface DepositModalProps {
  bridge: ReturnType<typeof useBridge>
  deposit: ReturnType<typeof useDeposit>
}

const titleByStatus: Record<TransactionStatus, string> = {
  'Approve 0': 'Waiting for approval',
  Approve: 'Waiting for approval',
  Deposit: 'Waiting for deposit',
  'In Transit': 'Transit',
  'Transfer Completed': 'Transfer Completed',
  'Transfer Aborted': 'Transfer Failed',
  'Initializing Transfer': 'Initializing Transfer',
}

const DepositModal: React.FC<DepositModalProps> = ({ bridge, deposit }) => {
  const { currency, depositAmount, recipient, destinationChainConfig, homeChainConfig, transactionStatus } = bridge
  const { onDismiss } = useModalContext()

  const title = transactionStatus ? titleByStatus[transactionStatus] : 'Confirm Bridge Transfer'

  const handleDeposit = () => {
    const selectedToken =
      currency instanceof ERC20Token
        ? currency.address
        : currency?.isNative
        ? '0x0000000000000000000000000000000000000000'
        : undefined
    deposit(parseFloat(depositAmount), recipient, selectedToken, destinationChainConfig.domainId)
  }

  const handleDismiss = () => {
    onDismiss()
  }

  const waitingForApproval = (
    <>
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
      <Text>Please approve the transaction in your wallet</Text>
    </>
  )

  const waitingForDeposit = (
    <>
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
      <Text>Please confirm the transaction in your wallet</Text>
    </>
  )

  const waitingForTransfer = (
    <>
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
      <Text>Please wait for the transfer to complete</Text>
    </>
  )

  const transferInTransit = (
    <>
      <Flex justifyContent="center">
        <Spinner />
      </Flex>
      <Text>Transfer in transit</Text>
      <Text>Please check you wallet in a few minutes</Text>
      <Button onClick={handleDismiss}>Ok</Button>
    </>
  )

  const preview = (
    <>
      <Flex alignItems="center" style={{ gap: '0.5em' }}>
        <ChainLogo chainId={homeChainConfig.networkId} />
        <Text fontSize="1.5em">{homeChainConfig.name}</Text>
      </Flex>
      <span>
        <ArrowDownIcon />
      </span>
      <Flex alignItems="center" style={{ gap: '0.5em' }}>
        <ChainLogo chainId={destinationChainConfig.networkId} />
        <Text fontSize="1.5em">{destinationChainConfig.name}</Text>
      </Flex>
      <Divider margin="0px" />
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="1em" display="flex" style={{ alignItems: 'center' }}>
          <CurrencyLogo currency={currency} /> Amount
        </Text>
        <Text fontSize="1em">
          {formatAmount(depositAmount)} {currency?.symbol}
        </Text>
      </Flex>
      <Button onClick={handleDeposit}>Confirm</Button>
    </>
  )

  const mapping = {
    'Approve 0': waitingForApproval,
    Approve: waitingForApproval,
    Deposit: waitingForDeposit,
    'In Transit': transferInTransit,
    'Transfer Completed': <Text>Transfer Completed! 🥳</Text>,
    'Transfer Aborted': <Text>Transfer Failed</Text>,
    'Initializing Transfer': waitingForTransfer,
  }

  const content = transactionStatus ? mapping[transactionStatus] : preview

  return (
    <Modal title={title} onDismiss={handleDismiss} maxWidth="400px">
      <Flex flexDirection="column" alignItems="stretch" style={{ gap: '1em' }}>
        {content}
      </Flex>
    </Modal>
  )
}

export default DepositModal
