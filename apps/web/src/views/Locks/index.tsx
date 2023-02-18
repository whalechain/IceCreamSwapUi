import { AtomBox } from '@pancakeswap/ui'
import { Button, Flex, Heading, Table, Td, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import { useState } from 'react'
import Page from '../Page'
import { StyledLockBody, StyledLockContainer } from './styles'
import AddressInput from './components/AddressInput'
import { BigNumber } from '@ethersproject/bignumber'
import styled from 'styled-components'
import TokenName from './components/TokenName'

interface Lock {
  owner: string
  tokenAddress: string
  amount: BigNumber
  startTime: number
  duration: number
  amountUnlocked: BigNumber
}

const useLocks = () => {
  const locks = [
    {
      owner: '0x00000000',
      tokenAddress: '0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D',
      amount: BigNumber.from(50000),
      startTime: Date.now().valueOf(),
      duration: 100000,
      amountUnlocked: BigNumber.from(700),
    },
    {
      owner: '0x00000000',
      tokenAddress: '0xC7E6d7E08A89209F02af47965337714153c529F0',
      amount: BigNumber.from(56000),
      startTime: Date.now().valueOf(),
      duration: 1000,
      amountUnlocked: BigNumber.from(700),
    },
  ]
  return locks
}
const RowStyled = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDisabled};
  }

  &:last-of-type {
    border-radius: 0 0 16px 16px;
  }
`

const RowHeaderStyled = styled.tr``

const renderDate = (date: number) => {
  return new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date(date))
}

const Locks: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState('')
  const [isValidAddress, setIsValidAddress] = useState(false)
  const { isMobile } = useMatchBreakpoints()
  const locks = useLocks()

  return (
    <Page>
      <Flex marginBottom="4em" width={['328px', , '100%']} height="100%" justifyContent="center">
        <Flex flexDirection="column">
          <StyledLockContainer>
            <AppBody>
              <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
                <AtomBox display="flex" width="full" alignItems="center" justifyContent="center">
                  <Heading as="h2">Locks</Heading>
                </AtomBox>
                <Text color="textSubtle" fontSize="14px" textAlign="center">
                  Lock your tokens for a fixed period
                </Text>
              </AtomBox>
              <StyledLockBody>
                <Flex flexDirection="column">
                  <Text>Token Address</Text>
                  <Text color="textSubtle" fontSize="14px" textAlign="start">
                    View and Create Locks
                  </Text>
                  <Flex
                    alignItems="center"
                    gap="1em"
                    flexDirection={isMobile ? 'column' : 'row'}
                    justifyContent="stretch"
                  >
                    <AddressInput value={tokenAddress} onChange={setTokenAddress} onChangeIsValid={setIsValidAddress} />
                    <Button width={isMobile && '100%'}>Go</Button>
                  </Flex>
                  <Heading as="h2" marginY="3">
                    My Locks
                  </Heading>
                  <Table>
                    <thead>
                      <RowHeaderStyled>
                        <Td>Token</Td>
                        <Td>Amount</Td>
                        <Td />
                      </RowHeaderStyled>
                    </thead>
                    <tbody>
                      {locks.map((lock: Lock) => (
                        <RowStyled key={lock.tokenAddress}>
                          <Td>
                            <TokenName address={lock.tokenAddress} />
                          </Td>
                          <Td>
                            {!isMobile
                              ? `${lock.amount.sub(lock.amountUnlocked).toString()}/${lock.amount.toString()} Locked`
                              : lock.amount.toString()}
                          </Td>
                          <Td>
                            <Button variant="subtle" scale="sm" style={{ fontSize: '0.75rem' }}>
                              View Details
                            </Button>
                          </Td>
                        </RowStyled>
                      ))}
                    </tbody>
                  </Table>
                </Flex>
              </StyledLockBody>
            </AppBody>
          </StyledLockContainer>
        </Flex>
      </Flex>
    </Page>
  )
}

export default Locks
