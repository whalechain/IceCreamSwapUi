import { ERC20Token } from '@pancakeswap/sdk'
import { Flex, Modal, useModalContext, Text, ArrowDownIcon, Button, Spinner, Column } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/Logo'
import { ChainLogo } from 'components/Logo/ChainLogo'
import Divider from 'views/Farms/components/Divider'
import { useBridge } from '../BridgeProvider'
import type { TransactionStatus } from '../BridgeProvider'
import { formatAmount } from '../formatter'
import { useDeposit } from '../hooks/useDeposit'
import ProgressSteps from 'views/Swap/components/ProgressSteps'
import { useState } from 'react'
import Image from 'next/image'
import BridgeSuccess from '../assets/bridge-success.png'
import chainName from 'config/constants/chainName'

interface DepositModalProps {
  bridge: ReturnType<typeof useBridge>
  deposit: ReturnType<typeof useDeposit>['deposit']
  approve: ReturnType<typeof useDeposit>['approve']
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

const DepositModal: React.FC<DepositModalProps> = ({ bridge, deposit, approve }) => {
  const {
    currency,
    depositAmount,
    recipient,
    destinationChainConfig,
    homeChainConfig,
    transactionStatus,
    hasApproval,
    setHasApproval,
    showApprovalFlow,
  } = bridge
  const { onDismiss } = useModalContext()
  const [waitingForApproval, setWaitingForApproval] = useState(false)

  const title = transactionStatus ? titleByStatus[transactionStatus] : 'Confirm Bridge Transfer'

  const selectedToken =
    currency instanceof ERC20Token
      ? currency.address
      : currency?.isNative
      ? '0x0000000000000000000000000000000000000000'
      : undefined
  const handleDeposit = () => {
    deposit(parseFloat(depositAmount), recipient, selectedToken, destinationChainConfig.domainId)
  }

  const handleApprove = () => {
    setWaitingForApproval(true)
    approve(parseFloat(depositAmount), selectedToken, setHasApproval).then(() => {
      setWaitingForApproval(false)
    })
  }

  const handleDismiss = () => {
    onDismiss()
  }

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
      <Text>Please wait the transaction will take a few minutes</Text>
    </>
  )

  const preview = (
    <>
      <Flex alignItems="center" style={{ gap: '0.5em' }}>
        <ChainLogo chainId={homeChainConfig.networkId} />
        <Text fontSize="1.5em">{chainName[homeChainConfig.networkId]}</Text>
      </Flex>
      <span>
        <ArrowDownIcon />
      </span>
      <Flex alignItems="center" style={{ gap: '0.5em' }}>
        <ChainLogo chainId={destinationChainConfig.networkId} />
        <Text fontSize="1.5em">{chainName[destinationChainConfig.networkId]}</Text>
      </Flex>
      <Divider margin="0px" />
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="1em" display="flex" style={{ alignItems: 'center', gap: '0.5em' }}>
          <CurrencyLogo currency={currency} />
          <span>Amount</span>
        </Text>
        <Text fontSize="1em">
          {formatAmount(depositAmount)} {currency?.symbol}
        </Text>
      </Flex>
      {showApprovalFlow ? (
        <>
          <Flex style={{ gap: '0.5em' }} alignItems="stretch">
            <Button
              style={{ flexGrow: 1 }}
              onClick={handleApprove}
              disabled={hasApproval}
              isLoading={waitingForApproval}
            >
              Approve
            </Button>
            <Button style={{ flexGrow: 1 }} onClick={handleDeposit} disabled={!hasApproval}>
              Confirm
            </Button>
          </Flex>
          <Column style={{ marginTop: '1rem' }}>
            <ProgressSteps steps={[hasApproval]} />
          </Column>
        </>
      ) : (
        <Button style={{ flexGrow: 1 }} onClick={handleDeposit}>
          Confirm
        </Button>
      )}
    </>
  )

  const transferCompleted = (
    <>
      <Flex justifyContent="center">
        <span style={{ maxWidth: '200px' }}>
          <Image src={BridgeSuccess} alt="success" />
        </span>
      </Flex>
      <Text>Congratulations! Your transfer has been completed.</Text>
      <Button onClick={handleDismiss}>Close</Button>
    </>
  )

  const mapping = {
    Deposit: waitingForDeposit,
    'In Transit': transferInTransit,
    'Transfer Completed': transferCompleted,
    'Transfer Aborted': <Text>Transfer Failed</Text>,
    'Initializing Transfer': waitingForTransfer,
  }

  const content = transactionStatus ? mapping[transactionStatus] : preview

  return (
    <Modal title={title} onDismiss={handleDismiss} minWidth="min(100vw, 426px)">
      <Flex flexDirection="column" alignItems="stretch" style={{ gap: '1em' }}>
        {content}
      </Flex>
    </Modal>
  )
}

export default DepositModal
