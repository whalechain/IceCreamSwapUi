import { AtomBox } from '@pancakeswap/ui'
import { Button, Checkbox, Flex, Heading, Input, Select, Text } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import CurrencyInputPanel from 'components/CurrencyInputPanel'
import { ChainLogo } from 'components/Logo/ChainLogo'
import { useSwitchNetwork } from 'hooks/useSwitchNetwork'
import { chains } from 'utils/wagmi'
import Page from '../Page'
import { StyledBridgeBody, StyledBridgeContainer, StyledInputCurrencyWrapper } from './styles'
import { useCurrencyBalance } from 'state/wallet/hooks'
import { useWeb3React } from '@pancakeswap/wagmi'
import { useMemo } from 'react'
import { useBridge } from './BridgeProvider'
import { useBridgeTax } from './hooks/useBridgeTax'
import Divider from 'views/Farms/components/Divider'
import FormError from './components/FormError'
import { useFormErrors } from './hooks/useFormErrors'
import { useDeposit } from './hooks/useDeposit'
import { ERC20Token } from '@pancakeswap/sdk'
import { useRouter } from 'next/router'
import ConnectWalletButton from 'components/ConnectWalletButton'

const Bridge = () => {
  const { account, chainId: accountChainId } = useWeb3React()
  const { switchNetworkAsync } = useSwitchNetwork()
  const { chainId: routerChainId } = useRouter().query
  const chainId = accountChainId ?? (typeof routerChainId === 'string' ? parseInt(routerChainId) : undefined)
  const {
    currency,
    setCurrency,
    depositAmount,
    setDepositAmount,
    tokens,
    setDestinationChainId,
    destinationChainId,
    recipient,
    setRecipient,
    setToOtherAddress,
    toOtherAddress,
    transactionStatus,
    destinationChainConfig,
    showNative,
  } = useBridge()

  const balance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const tax = useBridgeTax()
  const { formErrors, validateForm, setHasSubmitted } = useFormErrors(tax.bridgeFee, tax.bridgeFeeToken)
  const deposit = useDeposit()

  const homeChainOptions = useMemo(
    () =>
      chains.map((chain) => ({
        label: (
          <>
            <ChainLogo chainId={chain.id} />
            {chain.name}
          </>
        ),
        value: chain.id,
      })),
    [],
  )

  const targetChainOptions = useMemo(
    () =>
      chains
        .filter((chain) => chain.id !== chainId)
        .map((chain) => ({
          label: (
            <>
              <ChainLogo chainId={chain.id} />
              {chain.name}
            </>
          ),
          value: chain.id,
        })),
    [chainId],
  )

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
                    options={homeChainOptions}
                    onOptionChange={(option) => {
                      switchNetworkAsync(option.value)
                    }}
                    value={chainId}
                  />
                  Target Chain
                  <Select
                    options={targetChainOptions}
                    onOptionChange={(option) => {
                      setDestinationChainId(option.value)
                    }}
                    value={destinationChainId}
                  />
                  <div>
                    <CurrencyInputPanel
                      label="Amount"
                      value={depositAmount.toString()}
                      showMaxButton
                      showQuickInputButton
                      onUserInput={(value) => {
                        setDepositAmount(value)
                      }}
                      onPercentInput={(percent) => {
                        setDepositAmount((+balance?.toExact() * 0.01 * percent).toString())
                      }}
                      onMax={() => {
                        setDepositAmount(balance?.toExact() || '0')
                      }}
                      onCurrencySelect={setCurrency}
                      currency={currency}
                      id="bridge-currency-input"
                      tokens={tokens}
                      hideManage
                      showCommonBases={false}
                      showNative={showNative}
                    />
                    {formErrors.currency && <FormError>{formErrors.currency}</FormError>}
                  </div>
                  <Flex alignItems="center">
                    <Checkbox
                      name="own-address"
                      type="checkbox"
                      checked={toOtherAddress}
                      onChange={() => setToOtherAddress(!toOtherAddress)}
                      scale="sm"
                    />
                    <Text ml="10px" style={{ userSelect: 'none' }} onClick={() => setToOtherAddress(!toOtherAddress)}>
                      Send funds to an other address than my own
                    </Text>
                  </Flex>
                  {toOtherAddress && (
                    <Flex flexDirection="column">
                      <Text>Recipient Address</Text>
                      <Input
                        placeholder="0xXXXXXXXXXXXXXXX…"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                      />
                      {formErrors.recipient && <FormError>{formErrors.recipient}</FormError>}
                    </Flex>
                  )}
                  <Divider margin="0px" />
                  {currency && !!tax.bridgeFee && !!tax.hasBridgeFee && (
                    <>
                      <Flex justifyContent="space-between">
                        <span>Bridge Fee</span>
                        <pre>
                          {tax.bridgeFee ?? '0'} {tax.bridgeFeeCurrency.name}
                        </pre>
                      </Flex>
                      <Flex justifyContent="space-between">
                        <span>Transfer Amount</span>
                        <pre>
                          {depositAmount} {currency.name}
                        </pre>
                      </Flex>
                    </>
                  )}
                  {account ? (
                    <Button
                      onClick={() => {
                        validateForm().then((isValid) => {
                          if (isValid) {
                            const selectedToken =
                              currency instanceof ERC20Token
                                ? currency.address
                                : currency?.isNative
                                ? '0x0000000000000000000000000000000000000000'
                                : undefined

                            deposit(
                              parseFloat(depositAmount),
                              recipient,
                              selectedToken,
                              destinationChainConfig.domainId,
                            )
                          }
                        })
                        setHasSubmitted(true)
                      }}
                    >
                      Bridge
                    </Button>
                  ) : (
                    <ConnectWalletButton />
                  )}
                  {transactionStatus && <span>{transactionStatus}</span>}
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
