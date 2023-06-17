import { ChainId, Currency, CurrencyAmount, JSBI, NATIVE } from '@pancakeswap/sdk'
import { FAST_INTERVAL, NATIVE_TOKEN_ADDRESS } from 'config/constants'
import { useIsAkkaSwapModeActive, useIsAkkaSwapModeStatus } from 'state/global/hooks'
import { Field } from 'state/swap/actions'
import { useDerivedSwapInfo, useSwapState } from 'state/swap/hooks'
import useSWR, { Fetcher, useSWRConfig } from 'swr'
import { AkkaRouterResponseType } from './types'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useCurrency } from 'hooks/Tokens'
import { captureMessage } from '@sentry/nextjs'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useEffect, useState } from 'react'
import { setRouteApiChainName } from 'utils/akka/setRouteApiChainName'

export const useAkkaRouterApi = (
  token0: Currency,
  token1: Currency,
  amount: CurrencyAmount<Currency>,
  slippage = 0.1,
) => {
  const {
    independentField,
    typedValue,
    recipient,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)
  const [, , toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] = useIsAkkaSwapModeStatus()
  // isAkkaSwapActive checks if akka router is generally active or not
  const [isAkkaSwapActive, toggleSetAkkaActive, toggleSetAkkaActiveToFalse, toggleSetAkkaActiveToTrue] =
    useIsAkkaSwapModeActive()
  const [isRouteLoading, setIsRouteLoading] = useState(false)
  const { isConnected, account } = useActiveWeb3React()

  // Take swap information from pancakeswap router
  const {
    v2Trade,
    currencyBalances,
    parsedAmount,
    inputError: swapInputError,
  } = useDerivedSwapInfo(independentField, typedValue, inputCurrency, outputCurrency, recipient)

  const fetcher: Fetcher<AkkaRouterResponseType> = async (url) => {
    setIsRouteLoading(true)
    toggleSetAkkaModeToFalse()
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), 3500);
    const res = await fetch(url, { signal: controller.signal }).then((r) => {
      if (r.status !== 200) {
        toggleSetAkkaModeToFalse()
        // captureMessage('AKKA: Unsupported Token (Route 400)', {
        //   tags: {
        //     chain_id: chainId,
        //     amount: amount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
        //     fromToken: inputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token0?.wrapped?.address,
        //     toToken: outputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token1?.wrapped?.address,
        //   },
        // })
      }
      // toggleSetAkkaModeToTrue()
      setIsRouteLoading(false)
      return r.json()
    })
      .then((res) => {
        if (v2Trade.outputAmount.greaterThan(JSBI.BigInt(res.route.return_amount_without_tax_wei))) {
          console.log("1");

          toggleSetAkkaModeToFalse()
        }
        else {
          console.log("2");

          toggleSetAkkaModeToTrue()
        }
        clearTimeout(id);
        return res
      })
      .finally(() => {
        setIsRouteLoading(false)
      })
    return res;
  }
  const { chainId } = useActiveChainId()
  const API_URL = 'https://api.akka.foundation'
  const { data, error, mutate, isValidating } = useSWR(
    `${API_URL}/route_swap?token0=${inputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token0?.wrapped?.address
    }&token1=${outputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token1?.wrapped?.address
    }&amount=${amount?.multiply(10 ** inputCurrency?.decimals)?.toExact()}&slipage=${slippage / 10000}&use_split=true${account ? `&user_wallet_addr=${account}` : ''
    }&chain0=${setRouteApiChainName(chainId)}&chain1=${setRouteApiChainName(chainId)}`,
    token0 &&
    token1 &&
    amount &&
    slippage &&
    (chainId === ChainId.BITGERT || chainId === ChainId.XDC || chainId === ChainId.CORE) &&
    isAkkaSwapActive &&
    fetcher,
    {
      refreshInterval: FAST_INTERVAL,
      revalidateIfStale: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false
    },
  )
  return { data, error, mutate, isValidating, isRouteLoading }
}

// Call both apis route and args together in the same time
export const useAkkaRouterRouteWithArgs = (
  token0: Currency,
  token1: Currency,
  amount: CurrencyAmount<Currency>,
  slippage = 0.1,
) => {
  const route = useAkkaRouterApi(token0, token1, amount, slippage)

  const mutateAkkaRoute = () => {
    route.mutate()
  }

  const isLoading = route.isRouteLoading || route.isValidating

  return {
    route: route,
    args: route,
    mutateAkkaRoute,
    isLoading
  }
}