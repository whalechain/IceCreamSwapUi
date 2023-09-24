import { useTranslation } from '@pancakeswap/localization'
import { ChainId, Currency, NATIVE } from '@pancakeswap/sdk'
import { BottomDrawer, Flex, Link, Message, Modal, ModalV2, useMatchBreakpoints } from '@pancakeswap/uikit'
import replaceBrowserHistory from '@pancakeswap/utils/replaceBrowserHistory'
import { AppBody } from 'components/App'
import { NATIVE_TOKEN_ADDRESS } from 'config/constants'
import { useRouter } from 'next/router'
import { useCallback, useContext, useEffect, useState } from 'react'
import { useSwapActionHandlers } from 'state/swap/useSwapActionHandlers'
import { currencyId } from 'utils/currencyId'
import { useUserSlippage } from '@pancakeswap/utils/user'
import { useWeb3React } from '@pancakeswap/wagmi'
import { captureMessage } from '@sentry/nextjs'
import chainName from 'config/constants/chainName'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { ApprovalState } from 'hooks/useApproveCallback'
import { useSupportedChainList, useSupportedChains } from 'hooks/useSupportedChains'
import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
import useWrapCallback, { WrapType } from 'hooks/useWrapCallback'
import { useIsAkkaContractSwapModeActive, useIsAkkaSwapModeActive, useIsAkkaSwapModeStatus } from 'state/global/hooks'
import { useAkkaRouterContract, useAkkaRouterCoreContract } from 'utils/exchange'
import { useBalance } from 'wagmi'
import { useCurrency } from 'hooks/Tokens'
import { Field } from 'state/swap/actions'
import {
  useDefaultsFromURLSearch,
  useDerivedSwapInfo,
  useSingleTokenSwapInfo,
  useSwapState,
} from '../../state/swap/hooks'
import Page from '../Page'
import { useAkkaSwapInfo } from './AkkaSwap/hooks/useAkkaSwapInfo'
import { useApproveCallbackFromAkkaTrade } from './AkkaSwap/hooks/useApproveCallbackFromAkkaTrade'
import PriceChartContainer from './components/Chart/PriceChartContainer'
import HotTokenList from './components/HotTokenList'
import useWarningImport from './hooks/useWarningImport'
import { StyledInputCurrencyWrapper, StyledSwapContainer } from './styles'
import { SwapFeaturesContext } from './SwapFeaturesContext'
import { V3SwapForm } from './V3Swap'

export default function Swap() {
  const { query } = useRouter()
  const { isDesktop } = useMatchBreakpoints()
  const {
    isChartExpanded,
    isChartDisplayed,
    setIsChartDisplayed,
    setIsChartExpanded,
    isChartSupported,
    isHotTokenSupported,
  } = useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  const { t } = useTranslation()
  const [firstTime, setFirstTime] = useState(true)

  useEffect(() => {
    if (firstTime && query.showTradingReward) {
      setFirstTime(false)
      setIsSwapHotTokenDisplay(true)

      if (!isSwapHotTokenDisplay && isChartDisplayed) {
        setIsChartDisplayed((currentIsChartDisplayed) => !currentIsChartDisplayed)
      }
    }
  }, [firstTime, isChartDisplayed, isSwapHotTokenDisplay, query, setIsSwapHotTokenDisplay, setIsChartDisplayed])

  const { account } = useWeb3React()

  // swap state & price data
  const {
    independentField,
    typedValue,
    recipient,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()

  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)
  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  const { chainId: walletChainId } = useWeb3React()

  // isAkkaSwapMode checks if this is akka router form or not from redux
  const [isAkkaSwapMode, toggleSetAkkaMode, toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] =
    useIsAkkaSwapModeStatus()

  // get custom setting values for user
  const [allowedSlippage] = useUserSlippage()

  // Take swap information from pancakeswap router
  const {
    v2Trade,
    currencyBalances,
    parsedAmount,
    inputError: swapInputError,
  } = useDerivedSwapInfo(independentField, typedValue, inputCurrency, outputCurrency, recipient)

  // Take swap information from AKKA router
  const {
    trade: akkaRouterTrade,
    currencyBalances: akkaCurrencyBalances,
    parsedAmount: akkaParsedAmount,
    inputError: akkaSwapInputError,
  } = useAkkaSwapInfo(independentField, typedValue, inputCurrency, outputCurrency, allowedSlippage)

  const {
    wrapType,
    execute: onWrap,
    inputError: wrapInputError,
  } = useWrapCallback(currencies[Field.INPUT], currencies[Field.OUTPUT], typedValue)

  const showWrap: boolean = wrapType !== WrapType.NOT_APPLICABLE
  const trade = showWrap ? undefined : v2Trade
  const parsedAmounts = showWrap
    ? {
        [Field.INPUT]: parsedAmount,
        [Field.OUTPUT]: parsedAmount,
      }
    : {
        [Field.INPUT]: independentField === Field.INPUT ? parsedAmount : trade?.inputAmount,
        [Field.OUTPUT]: independentField === Field.OUTPUT ? parsedAmount : trade?.outputAmount,
      }
  const akkaContract = useAkkaRouterContract()
  const akkaCoreContract = useAkkaRouterCoreContract()
  const { isConnected } = useWeb3React()
  const methodName = 'multiPathSwap'
  const {approvalState: akkaApproval, approveCallback: akkaApproveCallback} = useApproveCallbackFromAkkaTrade(parsedAmounts[Field.INPUT])

  // isAkkaSwapActive checks if akka router is generally active or not
  const [isAkkaSwapActive, toggleSetAkkaActive, toggleSetAkkaActiveToFalse, toggleSetAkkaActiveToTrue] =
    useIsAkkaSwapModeActive()

  // isAkkaContractSwapMode checks if this is akka router form or not from redux
  const [
    isAkkaContractSwapMode,
    toggleSetAkkaContractMode,
    toggleSetAkkaContractModeToFalse,
    toggleSetAkkaContractModeToTrue,
  ] = useIsAkkaContractSwapModeActive()

  const { chainId } = useActiveWeb3React()

  // Check Independent Field for AKKA
  useEffect(() => {
    if (independentField === Field.OUTPUT) {
      toggleSetAkkaActiveToFalse()
    } else {
      toggleSetAkkaActiveToTrue()
    }
  }, [independentField])

  // Check if pancakeswap route is better than akka route or not
  useEffect(() => {
    if (akkaRouterTrade?.route?.returnAmountWithoutTaxWei && v2Trade?.outputAmount) {
      if (v2Trade?.outputAmount.greaterThan(akkaRouterTrade?.route?.returnAmountWei)) {
        toggleSetAkkaModeToFalse()
        // captureMessage(`AKKA: RateError`, {
        //   tags: {
        //     chain_id: chainId,
        //     amount: parsedAmount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
        //     fromToken: inputCurrencyId === NATIVE[chainId]?.symbol ? NATIVE_TOKEN_ADDRESS : inputCurrency?.wrapped?.address,
        //     toToken: outputCurrencyId === NATIVE[chainId]?.symbol ? NATIVE_TOKEN_ADDRESS : outputCurrency?.wrapped?.address,
        //     pksRate: v2Trade?.outputAmount.toExact(),
        //     akkaRate: akkaRouterTrade?.route?.returnAmountWei,
        //   },
        // })
      } else {
        toggleSetAkkaModeToTrue()
      }
    }
  }, [typedValue, akkaRouterTrade, inputCurrencyId, outputCurrencyId])

  useEffect(() => {
    if (isConnected) {
      if (akkaApproval === ApprovalState.APPROVED) {
        if (
          currencyBalances[Field.INPUT] &&
          parsedAmount &&
          (currencyBalances[Field.INPUT].greaterThan(parsedAmount) ||
            currencyBalances[Field.INPUT].equalTo(parsedAmount))
        ) {
          if (akkaRouterTrade?.args?.amountIn && akkaRouterTrade?.args?.amountOutMin && akkaRouterTrade?.args?.data) {
            if (chainId === ChainId.CORE) {
              akkaCoreContract.estimateGas[methodName]([
                  BigInt(akkaRouterTrade?.args?.amountIn),
                  BigInt(akkaRouterTrade?.args?.amountOutMin),
                  akkaRouterTrade?.args?.data,
                  account,
                  BigInt(akkaRouterTrade?.args?.akkaFee?.fee),
                  Number(akkaRouterTrade?.args?.akkaFee?.v),
                  akkaRouterTrade?.args?.akkaFee?.r as `0x${string}`,
                  akkaRouterTrade?.args?.akkaFee?.s as `0x${string}`,
                ],
                {
                  value: inputCurrencyId === NATIVE[chainId].symbol ? akkaRouterTrade?.args?.amountIn : '0',
                },
              )
                .then((data) => {
                  if (data > 21000) {
                    toggleSetAkkaContractModeToTrue()
                  } else {
                    toggleSetAkkaContractModeToFalse()
                    captureMessage(`AKKA: EstimateGas is lower than 21000`, {
                      tags: {
                        chain_id: chainId,
                        amount: parsedAmount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
                        fromToken:
                          inputCurrencyId === NATIVE[chainId]?.symbol
                            ? NATIVE_TOKEN_ADDRESS
                            : inputCurrency?.wrapped?.address,
                        toToken:
                          outputCurrencyId === NATIVE[chainId]?.symbol
                            ? NATIVE_TOKEN_ADDRESS
                            : outputCurrency?.wrapped?.address,
                      },
                    })
                  }
                })
                .catch((error) => {
                  toggleSetAkkaContractModeToFalse()
                  captureMessage(`AKKA: EstimateGas Error -> ${error}`, {
                    tags: {
                      chain_id: chainId,
                      amount: parsedAmount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
                      fromToken:
                        inputCurrencyId === NATIVE[chainId]?.symbol
                          ? NATIVE_TOKEN_ADDRESS
                          : inputCurrency?.wrapped?.address,
                      toToken:
                        outputCurrencyId === NATIVE[chainId]?.symbol
                          ? NATIVE_TOKEN_ADDRESS
                          : outputCurrency?.wrapped?.address,
                    },
                  })
                })
            } else {
              akkaContract.estimateGas[methodName]([
                  BigInt(akkaRouterTrade?.args?.amountIn),
                  BigInt(akkaRouterTrade?.args?.amountOutMin),
                  akkaRouterTrade?.args?.data,
                  [],
                  [],
                  account,
                ],
                {
                  value: inputCurrencyId === NATIVE[chainId].symbol ? akkaRouterTrade?.args?.amountIn : '0',
                },
              )
                .then((data) => {
                  if (data > 21000) {
                    toggleSetAkkaContractModeToTrue()
                  } else {
                    toggleSetAkkaContractModeToFalse()
                    captureMessage(`AKKA: EstimateGas is lower than 21000`, {
                      tags: {
                        chain_id: chainId,
                        amount: parsedAmount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
                        fromToken:
                          inputCurrencyId === NATIVE[chainId]?.symbol
                            ? NATIVE_TOKEN_ADDRESS
                            : inputCurrency?.wrapped?.address,
                        toToken:
                          outputCurrencyId === NATIVE[chainId]?.symbol
                            ? NATIVE_TOKEN_ADDRESS
                            : outputCurrency?.wrapped?.address,
                      },
                    })
                  }
                })
                .catch((error) => {
                  toggleSetAkkaContractModeToFalse()
                  captureMessage(`AKKA: EstimateGas Error -> ${error}`, {
                    tags: {
                      chain_id: chainId,
                      amount: parsedAmount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
                      fromToken:
                        inputCurrencyId === NATIVE[chainId]?.symbol
                          ? NATIVE_TOKEN_ADDRESS
                          : inputCurrency?.wrapped?.address,
                      toToken:
                        outputCurrencyId === NATIVE[chainId]?.symbol
                          ? NATIVE_TOKEN_ADDRESS
                          : outputCurrency?.wrapped?.address,
                    },
                  })
                })
            }
          }
        } else {
          toggleSetAkkaContractModeToTrue()
        }
      } else {
        toggleSetAkkaContractModeToTrue()
      }
    } else {
      toggleSetAkkaContractModeToTrue()
    }
  }, [akkaApproval, isConnected, parsedAmounts, parsedAmount, akkaRouterTrade])

  const singleTokenPrice = useSingleTokenSwapInfo(inputCurrencyId, inputCurrency, outputCurrencyId, outputCurrency)
  const warningSwapHandler = useWarningImport()
  useDefaultsFromURLSearch()
  const { onCurrencySelection } = useSwapActionHandlers()

  const handleOutputSelect = useCallback(
    (newCurrencyOutput: Currency) => {
      onCurrencySelection(Field.OUTPUT, newCurrencyOutput)
      warningSwapHandler(newCurrencyOutput)

      const newCurrencyOutputId = currencyId(newCurrencyOutput)
      if (newCurrencyOutputId === inputCurrencyId) {
        replaceBrowserHistory('inputCurrency', outputCurrencyId)
      }
      replaceBrowserHistory('outputCurrency', newCurrencyOutputId)
    },

    [inputCurrencyId, outputCurrencyId, onCurrencySelection, warningSwapHandler],
  )
  const supportedChains = useSupportedChains()
  const supportedChainNames = useSupportedChainList()
  const balance = useBalance({ address: account })
  const isChainSupported = walletChainId ? supportedChains.includes(walletChainId) : true
  const isConnectedAndHasNoBalance = isConnected && balance.data?.value === 0n

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      {isConnectedAndHasNoBalance && (
        <Message variant="info" mb="16px">
          <span>
            It looks like you don&apos;t have any {chainName[walletChainId]} tokens. Simply{'  '}
            <Link href="/bridge" display="inline-flex">
              bridge
            </Link>{' '}
            any token to {chainName[walletChainId]} and recieve a free gasdrop.
          </span>
        </Message>
      )}
      <Flex
        marginBottom="4em"
        width={['328px', '100%']}
        height="100%"
        justifyContent="center"
        position="relative"
        alignItems="flex-start"
      >
        {isDesktop && isChartSupported && (
          <PriceChartContainer
            inputCurrencyId={inputCurrencyId}
            inputCurrency={currencies[Field.INPUT]}
            outputCurrencyId={outputCurrencyId}
            outputCurrency={currencies[Field.OUTPUT]}
            isChartExpanded={isChartExpanded}
            setIsChartExpanded={setIsChartExpanded}
            isChartDisplayed={isChartDisplayed}
            currentSwapPrice={singleTokenPrice}
          />
        )}
        {!isDesktop && isChartSupported && (
          <BottomDrawer
            content={
              <PriceChartContainer
                inputCurrencyId={inputCurrencyId}
                inputCurrency={currencies[Field.INPUT]}
                outputCurrencyId={outputCurrencyId}
                outputCurrency={currencies[Field.OUTPUT]}
                isChartExpanded={isChartExpanded}
                setIsChartExpanded={setIsChartExpanded}
                isChartDisplayed={isChartDisplayed}
                currentSwapPrice={singleTokenPrice}
                isFullWidthContainer
                isMobile
              />
            }
            isOpen={isChartDisplayed}
            setIsOpen={setIsChartDisplayed}
          />
        )}
        {isDesktop && isSwapHotTokenDisplay && isHotTokenSupported && (
          <HotTokenList handleOutputSelect={handleOutputSelect} />
        )}
        <ModalV2
          isOpen={!isDesktop && isSwapHotTokenDisplay && isHotTokenSupported}
          onDismiss={() => setIsSwapHotTokenDisplay(false)}
        >
          <Modal
            style={{ padding: 0 }}
            title={t('Top Token')}
            onDismiss={() => setIsSwapHotTokenDisplay(false)}
            bodyPadding="0px"
          >
            <HotTokenList
              handleOutputSelect={(newCurrencyOutput: Currency) => {
                handleOutputSelect(newCurrencyOutput)
                setIsSwapHotTokenDisplay(false)
              }}
            />
          </Modal>
        </ModalV2>
        <Flex flexDirection="column">
          <StyledSwapContainer $isChartExpanded={isChartExpanded}>
            <StyledInputCurrencyWrapper mt={isChartExpanded ? '24px' : '0'}>
              <AppBody>
                <V3SwapForm />
              </AppBody>
            </StyledInputCurrencyWrapper>
          </StyledSwapContainer>
        </Flex>
      </Flex>
    </Page>
  )
}
