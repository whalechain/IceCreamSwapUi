import { Button, Flex, Heading, Link, Table, Td, Text, useMatchBreakpoints } from '@pancakeswap/uikit'
import { PropsWithChildren, useMemo, useCallback } from 'react'
import { FetchStatus } from 'config/constants/types'
import { BigNumber, utils } from 'ethers'
import styled from 'styled-components'
import { useActiveChain } from 'hooks/useActiveChain'
import { useToken } from 'hooks/Tokens'
import { formatAmount } from 'views/Bridge/formatter'
import { useAccount } from 'wagmi'
import AppWrapper from 'components/AppWrapper'
import { useCampaigns } from './hooks'
import TokenName from 'views/Locks/components/TokenName'
import { renderDate } from 'views/Locks/utils'

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

export const CampaignOverview: React.FC<{ id: number }> = ({ id }) => {
  const { isMobile } = useMatchBreakpoints()
  const { address } = useAccount()
  const { data, status } = useCampaigns({ id })
  const campaign = data?.[0]
  const chain = useActiveChain()
  const getAddressUrl = (add: string) => `${chain?.blockExplorers.default.url}/address/${add}`

  const token = useToken(campaign?.tokenAddress)
  const format = useCallback(
    (value: BigNumber) => {
      if (!value) return ''
      const decimals = token?.decimals ?? 18
      return formatAmount(Number(utils.formatUnits(value, decimals)))
    },
    [token],
  )

  return (
    <AppWrapper hasBackButton title={`Viewing ${token?.name} Campaign`} subtitle="">
      <Flex flexDirection="column" gap="0.75em">
        {status === FetchStatus.Failed ? (
          <Heading as="h2" marginY="3">
            Campaign not found
          </Heading>
        ) : (
          <>
            <Heading as="h2" marginY="3">
              {token?.name} Campaign
            </Heading>
            <Text>{campaign?.description}</Text>
            {campaign && (
              <>
                <Table>
                  <tbody>
                    <RowStyled>
                      <Td1>Token{isMobile && ':'}</Td1>
                      <Td2>
                        <TokenName withSymbol address={campaign.tokenAddress} />
                      </Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Token Address{isMobile && ':'}</Td1>
                      <Td2>
                        <Link external href={getAddressUrl(campaign.tokenAddress)} display="inline" target="_blank">
                          {campaign.tokenAddress}
                        </Link>
                      </Td2>
                    </RowStyled>

                    <RowStyled>
                      <Td1>Starting at</Td1>
                      <Td2>{renderDate(campaign.start_date.mul(1000).toNumber())}</Td2>
                    </RowStyled>
                    <RowStyled>
                      <Td1>Ending at</Td1>
                      <Td2>{renderDate(campaign.start_date.mul(1000).toNumber())}</Td2>
                    </RowStyled>
                  </tbody>
                </Table>
              </>
            )}
          </>
        )}
      </Flex>
    </AppWrapper>
  )
}
