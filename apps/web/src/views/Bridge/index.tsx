import { AtomBox } from '@pancakeswap/ui'
import { Checkbox, Flex, Heading, Input, Select, Text } from '@pancakeswap/uikit'
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
import { useRouter } from 'next/router'
import DepositButton from './components/DepositButton'
import { formatAmount } from './formatter'
import chainName from 'config/constants/chainName'
import { SUPPORT_BRIDGE } from 'config/constants/supportChains'

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
    showNative,
  } = useBridge()

  const balance = useCurrencyBalance(account ?? undefined, currency ?? undefined)
  const tax = useBridgeTax()
  const { formErrors, validateForm, setHasSubmitted } = useFormErrors(tax.bridgeFee, tax.bridgeFeeToken)

  const homeChainOptions = useMemo(
    () =>
      chains
        .filter((chain) => SUPPORT_BRIDGE.includes(chain.id))
        .map((chain) => ({
          label: (
            <>
              <ChainLogo chainId={chain.id} />
              {chainName[chain.id]}
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
        .filter((chain) => SUPPORT_BRIDGE.includes(chain.id))
        .map((chain) => ({
          label: (
            <>
              <ChainLogo chainId={chain.id} />
              {chainName[chain.id]}
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
                  <AtomBox display="flex" width="full" alignItems="center" justifyContent="center">
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
                      Send tokens to a different address
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
                  {currency && !!tax.bridgeFee && !!tax.hasBridgeFee && tax.bridgeFeeCurrency && (
                    <>
                      <Flex justifyContent="space-between">
                        <span>Transfer Amount</span>
                        <pre>
                          {formatAmount(depositAmount)} {currency.name}
                        </pre>
                      </Flex>
                      <Flex justifyContent="space-between">
                        <span>Bridge Fee</span>
                        <pre>
                          {formatAmount(tax.bridgeFee ?? '0')} {tax.bridgeFeeCurrency.name}
                        </pre>
                      </Flex>
                    </>
                  )}
                  <DepositButton validateForm={validateForm} setHasSubmitted={setHasSubmitted} />
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
