import { Button, Flex, Heading, Table, Td, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { useState } from 'react'
import AddressInput from './components/AddressInput'
import styled, { useTheme } from 'styled-components'
import TokenName from './components/TokenName'
import { useLocksByUser } from './hooks'
import LocksWrapper from './components/LocksWrapper'
import LockRow from './components/LockRow'

const RowStyled = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDisabled};
  }

  &:last-of-type {
    border-radius: 0 0 16px 16px;
  }
`

const RowHeaderStyled = styled.tr``

const Locks: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)
  const { isMobile } = useMatchBreakpoints()
  const { data: locks } = useLocksByUser()
  const theme = useTheme()

  return (
    <LocksWrapper title="Locks" subtitle="Lock your tokens for a fixed period">
      <Flex flexDirection="column" gap="0.75em">
        <Text>Token Address</Text>
        <Text color="textSubtle" fontSize="14px" textAlign="start">
          View and Create Locks
        </Text>
        <Flex alignItems="start" gap="1em" flexDirection={isMobile ? 'column' : 'row'} justifyContent="stretch">
          <AddressInput value={tokenAddress} onChange={setTokenAddress} onChangeIsValid={setIsValidAddress} />
          <Button height="40px" width={isMobile && '100%'}>
            Go
          </Button>
        </Flex>
        <Heading as="h2" marginY="3">
          My Locks
        </Heading>
        <Table>
          {!isMobile && (
            <thead>
              <RowHeaderStyled>
                <Td>Token</Td>
                <Td>Amount</Td>
                <Td>Claimable</Td>
                <Td />
              </RowHeaderStyled>
            </thead>
          )}
          <tbody>{locks && locks.map((lock) => <LockRow key={lock.lockId.toString()} lock={lock} />)}</tbody>
        </Table>
      </Flex>
    </LocksWrapper>
  )
}

export default Locks
