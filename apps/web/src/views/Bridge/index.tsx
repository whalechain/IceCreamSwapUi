import { AtomBox } from '@pancakeswap/ui'
import { Box, Button, Flex, Heading, Select, Text } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import { ChainLogo } from 'components/Logo/ChainLogo'
import { NetworkSwitcher } from 'components/NetworkSwitcher'
import { CommonBasesType } from 'components/SearchModal/types'
import { useAllTokens } from 'hooks/Tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { useCallback, useState } from 'react'
import { Field } from 'state/swap/actions'
import styled from 'styled-components'
import { chains } from 'utils/wagmi'
import Page from '../Page'
import { StyledBridgeBody, StyledBridgeContainer, StyledInputCurrencyWrapper } from './styles'

const Wrapper = styled.div`
  & > div {
    width: 100%;
    background-color: ${({ theme }) => theme.colors.input};
    border: 0;
  }
  & button {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.input};
    border-radius: 20px 20px 0 0;
  }
`

const Bridge = () => {
  const { chainId } = useActiveWeb3React()
  const { pendingChainId, isLoading, canSwitch, switchNetworkAsync } = useSwitchNetwork()
  const [tokenValue, setTokenValue] = useState('0')
  const tokens = useAllTokens()
  console.log(Object.values(tokens))
  console.log(chainId)

  return (
    <Page>
      <Flex marginBottom="4em" width={['328px', , '100%']} height="100%" justifyContent="center">
        <Flex flexDirection="column">
          <StyledBridgeContainer>
            <StyledInputCurrencyWrapper mt="0">
              <AppBody>
                <AtomBox width="full" alignItems="center" flexDirection="column" padding="24px" borderBottom="1">
                  <AtomBox display="flex" width="full" alignItems="center" justifyContent="space-between">
                    <Heading as="h2">Bridge</Heading>
                  </AtomBox>
                  <Text color="textSubtle" fontSize="14px" textAlign="center">
                    Transfer tokens between chains
                  </Text>
                </AtomBox>
                <StyledBridgeBody>
                  Home Chain
                  <Select
                    options={chains.map((chain) => ({
                      label: (
                        <>
                          <ChainLogo chainId={chain.id} />
                          {chain.name}
                        </>
                      ),
                      value: chain.id,
                    }))}
                    onOptionChange={(option) => {
                      switchNetworkAsync(option.value)
                    }}
                    defaultValue={chainId}
                  />
                  Target Chain
                  <Select
                    options={chains
                      .filter((chain) => chain.id !== chainId)
                      .map((chain) => ({
                        label: (
                          <>
                            <ChainLogo chainId={chain.id} />
                            {chain.name}
                          </>
                        ),
                        value: chain.id,
                      }))}
                  />
                  <CurrencyInputPanel
                    label="Amount"
                    value={tokenValue}
                    showMaxButton
                    showQuickInputButton
                    currency={
                      {
                        chainId: 32520,
                        decimals: 18,
                        symbol: 'BRISE',
                        name: 'Brise',
                        isNative: true,
                        isToken: false,
                      } as any
                    }
                    onUserInput={(value) => {
                      setTokenValue(value)
                    }}
                    onPercentInput={console.log}
                    onMax={console.log}
                    onCurrencySelect={console.log}
                    id="bridge-currency-input"
                    showCommonBases
                    commonBasesType={CommonBasesType.SWAP_LIMITORDER}
                  />
                  <Button>Bridge</Button>
                </StyledBridgeBody>
              </AppBody>
            </StyledInputCurrencyWrapper>
          </StyledBridgeContainer>
        </Flex>
      </Flex>
    </Page>
  )
}

export default Bridge
