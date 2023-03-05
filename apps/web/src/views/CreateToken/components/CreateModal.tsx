import { Currency, CurrencyAmount } from '@pancakeswap/sdk'
import { Flex, Modal, useModalContext, Text, Button } from '@pancakeswap/uikit'
import { CurrencyLogo } from 'components/Logo'
import { formatAmount } from '../../Bridge/formatter'
import { useState } from 'react'
import { FormValues } from '../create-schema'

interface DepositModalProps {
  formValues: FormValues
}

const CreateModal: React.FC<DepositModalProps> = (props) => {
  const { formValues } = props
  const [finished, setFinished] = useState(false)
  const { onDismiss } = useModalContext()

  const handleDeposit = () => {
    console.log(formValues)
  }

  const handleDismiss = () => {
    onDismiss()
  }

  const preview = (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="1em" display="flex" style={{ alignItems: 'center', gap: '0.5em' }}>
          {/* <CurrencyLogo currency={amount.currency} /> */}
          <span>Amount</span>
        </Text>
        <Text fontSize="1em"></Text>
      </Flex>
      <Button style={{ flexGrow: 1 }} onClick={handleDeposit}>
        Confirm
      </Button>
    </>
  )

  const transferCompleted = (
    <>
      <Text>Token created Successful</Text>
      <Button onClick={handleDismiss}>Close</Button>
    </>
  )

  const content = finished ? transferCompleted : preview

  return (
    <Modal title="Creating Lock" onDismiss={handleDismiss} minWidth="min(100vw, 426px)">
      <Flex flexDirection="column" alignItems="stretch" style={{ gap: '1em' }}>
        {content}
      </Flex>
    </Modal>
  )
}

export default CreateModal
