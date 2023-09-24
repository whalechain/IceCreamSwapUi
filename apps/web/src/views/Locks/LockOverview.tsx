import { Button, Flex, Heading, Link, Table, Td, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { PropsWithChildren, useMemo, useCallback } from 'react'
import { useLockingData, useLocks } from './hooks'
import { FetchStatus } from 'config/constants/types'
import styled from 'styled-components'
import TokenName from './components/TokenName'
import { useActiveChain } from 'hooks/useActiveChain'
import { useToken } from 'hooks/Tokens'
import { formatAmount } from 'views/Bridge/formatter'
import { renderDate } from '../../utils/renderDate'
import { useAccount } from 'wagmi'
import AppWrapper from 'components/AppWrapper'
import { formatUnits } from "viem";

const RowStyled = styled.tr`
  &:hover {
    background: ${({ theme }) => theme.colors.backgroundDisabled};
  }

  &:last-of-type {
    border-radius: 0 0 16px 16px;
  }

  max-width: calc(100vw - 48px);

  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: table-row;
  }
`

const Td1: React.FC<PropsWithChildren> = ({ children }) => {
  const { isMobile } = useMatchBreakpoints()
  return (
    <Td style={{ paddingBottom: isMobile ? '0px' : undefined, borderBottom: isMobile ? '0px' : undefined }}>
      {children}
    </Td>
  )
}

const Td2: React.FC<PropsWithChildren> = ({ children }) => {
  const { isMobile } = useMatchBreakpoints()
  return <Td style={{ paddingTop: isMobile ? '12px' : undefined, wordWrap: 'break-word' }}>{children}</Td>
}

export const LockOverview: React.FC<{ lockId: number }> = ({ lockId }) => {
  const { isMobile } = useMatchBreakpoints()
  const { address } = useAccount()
  const { data, status } = useLockingData([BigInt(lockId)])
  const locks = useLocks()
  const lock = data?.[0]
  const chain = useActiveChain()
  const getAddressUrl = (add: string) => `${chain?.blockExplorers.default.url}/address/${add}`

  const token = useToken(lock?.token)
  const format = useCallback(
    (value: bigint) => {
      if (!value) return ''
      const decimals = token?.decimals ?? 18
      return formatAmount(Number(formatUnits(value, decimals)))
    },
    [token],
  )
  const claimed = lock?.amount === lock.amountUnlocked

  const claim = useCallback(() => {
    if (!lock) return
    locks.write.unlockAvailable([lock.lockId], {})
  }, [lock, locks])

  return (
    <AppWrapper hasBackButton title={`Viewing Lock #${lockId}`} subtitle="Lock your tokens for a fixed period">
      <Flex flexDirection="column" gap="0.75em">
        {status === FetchStatus.Failed ? (
          <Heading as="h2" marginY="3">
            Lock with id {lockId} not found
          </Heading>
        ) : (
          <>
            <Heading as="h2" marginY="3">
              Lock #{lockId}
            </Heading>
            {lock && (
              <>
                <Table>
                  <tbody>
                    <RowStyled>
                      <Td1>Token{isMobile && ':'}</Td1>
                      <Td2>
                        <TokenName withSymbol address={lock.token} />
                      </Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Token Address{isMobile && ':'}</Td1>
                      <Td2>
                        <Link external href={getAddressUrl(lock.token)} display="inline" target="_blank">
                          {lock.token}
                        </Link>
                      </Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Lock Owner</Td1>
                      <Td2>
                        <Link external href={getAddressUrl(lock.owner)} display="inline" target="_blank">
                          {lock.owner}
                        </Link>
                      </Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Amount</Td1>
                      <Td2>{format(lock.amount)}</Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Amount Unlocked</Td1>
                      <Td2>{format(lock.amountUnlocked)}</Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Amount Claimable</Td1>
                      <Td2>{format(lock.amountToUnlock)}</Td2>
                    </RowStyled>
                    {lock.duration > 0 ? (
                      <>
                        <RowStyled>
                          <Td1>Vesting start</Td1>
                          <Td2>{renderDate(Number(lock.start_time * 1000n))}</Td2>
                        </RowStyled>
                        <RowStyled>
                          <Td1>Vesting end</Td1>
                          <Td2>{renderDate(Number((lock.start_time + lock.duration) * 1000n))}</Td2>
                        </RowStyled>
                      </>
                    ) : (
                      <RowStyled>
                        <Td1>Claimable at</Td1>
                        <Td2>{renderDate(Number(lock.start_time * 1000n))}</Td2>
                      </RowStyled>
                    )}
                  </tbody>
                </Table>
                {lock.owner === address && (
                  <>
                    <Heading marginTop="16px" as="h2">
                      Claim Lock
                    </Heading>
                    <Text>
                      {claimed ? (
                        'Fully Claimed'
                      ) : Number(lock.start_time * 1000n) < Date.now() ? (
                        `${format(lock.amountToUnlock)} claimable`
                      ) : (
                        <Flex flexDirection="column" gap="0.5em">
                          <span>Starting at</span>
                          <span>{renderDate(Number(lock.start_time * 1000n))}</span>
                        </Flex>
                      )}
                    </Text>
                    {Number(lock.start_time * 1000n) < Date.now() && !claimed && (
                      <Button
                        onClick={() => {
                          claim()
                        }}
                      >
                        Claim
                      </Button>
                    )}
                  </>
                )}
              </>
            )}
          </>
        )}
      </Flex>
    </AppWrapper>
  )
}
