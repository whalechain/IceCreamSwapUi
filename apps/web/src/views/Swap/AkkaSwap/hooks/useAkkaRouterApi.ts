import { ChainId, Currency, CurrencyAmount, NATIVE } from '@pancakeswap/sdk'
import { FAST_INTERVAL, NATIVE_TOKEN_ADDRESS } from 'config/constants'
import { useIsAkkaSwapModeActive, useIsAkkaSwapModeStatus } from 'state/global/hooks'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'
import useSWR, { Fetcher, useSWRConfig } from 'swr'
import { AkkaRouterArgsResponseType, AkkaRouterInfoResponseType } from './types'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useCurrency } from 'hooks/Tokens'
import { captureMessage } from '@sentry/nextjs'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useEffect, useState } from 'react'

// Api for smart contract args (use this api to call akka contract easily)
export const useAkkaRouterArgs = (
  token0: Currency,
  token1: Currency,
  amount: CurrencyAmount<Currency>,
  slippage = 0.1,
) => {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const { chainId } = useActiveChainId()
  const { account } = useActiveWeb3React()
  const API_URL = chainId === ChainId.CORE ? 'https://api.akka.foundation' : 'https://icecream.akka.finance'
  const [, , toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] = useIsAkkaSwapModeStatus()
  // isAkkaSwapActive checks if akka router is generally active or not
  const [isAkkaSwapActive, toggleSetAkkaActive, toggleSetAkkaActiveToFalse, toggleSetAkkaActiveToTrue] =
    useIsAkkaSwapModeActive()
  const [isArgsLoading, setIsArgsLoading] = useState(false)
  const fetcher: Fetcher<AkkaRouterArgsResponseType> = async (url) => {
    setIsArgsLoading(true)
    const res = await fetch(url).then((r) => {
      if (r.status !== 200) {
        toggleSetAkkaModeToFalse()
        // captureMessage('AKKA: Unsupported Token (Swap 500)', {
        //   tags: {
        //     chain_id: chainId,
        //     amount: amount?.multiply(10 ** inputCurrency?.decimals)?.toExact(),
        //     fromToken: inputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token0?.wrapped?.address,
        //     toToken: outputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token1?.wrapped?.address,
        //   },
        // })
      }
      return r.json()
    })
      .finally(() => {
        setIsArgsLoading(false)
      })
    return res;
  }
  const { data, error, mutate, isValidating } = useSWR(
    `${API_URL}/swap?token0=${inputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token0?.wrapped?.address
    }&token1=${outputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token1?.wrapped?.address
    }&amount=${amount?.multiply(10 ** inputCurrency?.decimals)?.toExact()}&slipage=${slippage / 10000}&use_split=true${account ? `&user_wallet_addr=${account}` : ''
    }&${chainId !== ChainId.CORE ? `chain_id=${chainId}` : `chain0=core&chain1=core`}`,
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

  return { data, error, mutate, isValidating, isArgsLoading }
}

// Api with information for ui to show route
export const useAkkaRouterRoute = (
  token0: Currency,
  token1: Currency,
  amount: CurrencyAmount<Currency>,
  slippage = 0.1,
) => {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const [, , toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] = useIsAkkaSwapModeStatus()
  // isAkkaSwapActive checks if akka router is generally active or not
  const [isAkkaSwapActive, toggleSetAkkaActive, toggleSetAkkaActiveToFalse, toggleSetAkkaActiveToTrue] =
    useIsAkkaSwapModeActive()
  const [isRouteLoading, setIsRouteLoading] = useState(false)
  const fetcher: Fetcher<AkkaRouterInfoResponseType> = async (url) => {
    setIsRouteLoading(true)
    const res = await fetch(url).then((r) => {
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
      return r.json()
    })
      .finally(() => {
        setIsRouteLoading(false)
      })
    return res;
  }
  const { chainId } = useActiveChainId()
  const API_URL = chainId === ChainId.CORE ? 'https://api.akka.foundation' : 'https://icecream.akka.finance'
  const { data, error, mutate, isValidating } = useSWR(
    `${API_URL}/route?token0=${inputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token0?.wrapped?.address
    }&token1=${outputCurrencyId === NATIVE[chainId].symbol ? NATIVE_TOKEN_ADDRESS : token1?.wrapped?.address
    }&amount=${amount?.multiply(10 ** inputCurrency?.decimals)?.toExact()}&slipage=${slippage / 10000}&use_split=true&${chainId !== ChainId.CORE ? `chain_id=${chainId}` : `chain0=core&chain1=core`
    }`,
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
  const route = useAkkaRouterRoute(token0, token1, amount, slippage)
  const args = useAkkaRouterArgs(token0, token1, amount, slippage)

  const mutateAkkaRoute = () => {
    route.mutate()
    args.mutate()
  }

  const isLoading = route.isRouteLoading && args.isArgsLoading

  return {
    route,
    args,
    mutateAkkaRoute,
    isLoading
  }
}