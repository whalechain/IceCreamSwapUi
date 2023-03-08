import { Flex, Modal, useModalContext, Text, Button, Heading } from '@pancakeswap/uikit'
import { formatAmount } from '../../Bridge/formatter'
import { useState } from 'react'
import { FormValues } from '../create-schema'
import styled from 'styled-components'
import { useAddUserToken } from 'state/user/hooks'
import { useToken } from 'hooks/Tokens'
import useUserAddedTokens from 'state/user/hooks/useUserAddedTokens'
import AddToWallet from './AddToWallet'
import useTokenDeployer from '../useTokenDeployer'
import { useAccount } from 'wagmi'
import ConnectWalletButton from 'components/ConnectWalletButton'

interface DepositModalProps {
  formValues: FormValues
}

const Logo = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

const Subtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSubtle};
`

const hasFeatures = (formValues: FormValues) => {
  return formValues?.burnable || formValues?.mintable
}

const CreateModal: React.FC<DepositModalProps> = (props) => {
  const { formValues } = props
  const [finished, setFinished] = useState(false)
  const { onDismiss } = useModalContext()
  const [tokenAddress, setTokenAddress] = useState<string | null>(null)
  const token = useToken(tokenAddress)
  const tokenDeployer = useTokenDeployer()
  const { address, status } = useAccount()

  const handleDeposit = async () => {
    console.log(formValues)
    const tx = await tokenDeployer.createToken(
      {
        name: formValues?.tokenName,
        symbol: formValues?.tokenSymbol,
        initialSupply: formValues?.initialSupply,
        maximumSupply: formValues?.maxSupply || 0,
        burnable: formValues?.burnable,
        mintable: formValues?.mintable,
        crossChain: false,
        minterDelay: 0,
        vault: '0x0000000000000000000000000000000000000000',
        underlying: '0x0000000000000000000000000000000000000000',
      },
      { gasLimit: 1000000 },
    )
    const ta = await tx.wait()
    const txHash = ta.transactionHash
    tokenDeployer.on(tokenDeployer.filters.TokenCreated(address), (creator) => {
      console.log('TokenCreated', creator)
    })
  }

  const addToken = useAddUserToken()
  const userAddedTokens = useUserAddedTokens()

  const handleDismiss = () => {
    onDismiss()
  }

  const preview = (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="1em" display="flex" style={{ alignItems: 'center', gap: '0.5em' }}>
          {/* <CurrencyLogo currency={amount.currency} /> */}
          <Logo src={formValues?.logo?.blob} />
          <div>
            <Heading>{formValues?.tokenName}</Heading>
            <Subtitle>{formValues?.tokenSymbol}</Subtitle>
          </div>
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontSize="1em">Initial Supply</Text>
        <Text fontSize="1em">{formValues?.initialSupply}</Text>
      </Flex>
      {hasFeatures(formValues) && <Heading>Features</Heading>}
      {formValues?.burnable && (
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="1em">Burnable</Text>
          <Text fontSize="1em">Yes</Text>
        </Flex>
      )}
      {formValues?.mintable && (
        <>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="1em">Mintable</Text>
            <Text fontSize="1em">Yes</Text>
          </Flex>
          <Flex alignItems="center" justifyContent="space-between">
            <Text fontSize="1em">Max Supply</Text>
            <Text fontSize="1em">{formValues?.maxSupply}</Text>
          </Flex>
        </>
      )}
      {status === 'connected' ? (
        <Button style={{ flexGrow: 1 }} onClick={handleDeposit}>
          Confirm
        </Button>
      ) : (
        <ConnectWalletButton />
      )}
    </>
  )

  const transferCompleted = (
    <>
      <Text>Token created Successful!</Text>
      <Text>What&apos;s next?</Text>
      <Button
        onClick={() => {
          addToken(token)
        }}
        disabled={userAddedTokens?.some((addedToken) => addedToken.address === tokenAddress)}
      >
        {userAddedTokens?.some((addedToken) => addedToken.address === tokenAddress) ? 'Imported' : 'Import to Swap'}
      </Button>
      <AddToWallet
        tokenAddress={tokenAddress!}
        tokenSymbol={formValues?.tokenSymbol}
        tokenDecimals={18}
        tokenImage={formValues?.logo?.blob}
      />
      <Button onClick={handleDismiss}>Close</Button>&apos;
    </>
  )

  const content = finished ? transferCompleted : preview

  return (
    <Modal title="Creating Token" onDismiss={handleDismiss} minWidth="min(100vw, 426px)">
      <Flex flexDirection="column" alignItems="stretch" style={{ gap: '1em' }}>
        {content}
      </Flex>
    </Modal>
  )
}

export default CreateModal
