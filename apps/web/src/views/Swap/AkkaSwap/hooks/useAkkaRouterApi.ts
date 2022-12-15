import { ChainId, Currency, CurrencyAmount } from '@pancakeswap/sdk'
import { FAST_INTERVAL } from 'config/constants'
import { keysToCamel } from 'utils/snakeToCamel'
import { useEffect } from 'react'
import { useIsAkkaSwapModeStatus } from 'state/global/hooks'
import { Field } from 'state/swap/actions'
import { useSwapState } from 'state/swap/hooks'
import useSWR, { Fetcher } from 'swr'
import { AkkaRouterArgsResponseType, AkkaRouterInfoResponseType, TokenEnum } from './types'
import { useActiveChainId } from 'hooks/useActiveChainId'
const setChainName = (chainNumber: ChainId): string => {
  switch (chainNumber) {
    case ChainId.BITGERT:
      return "bitgert"
    case ChainId.XDC:
      return "xdc"
    default:
      return ""
  }
}
// Api for smart contract args (use this api to call akka contract easily)
export const useAkkaRouterArgs = (token0: Currency, token1: Currency, amount: string, slippage = 0.1) => {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const [isAkkSwapMode, toggleSetAkkaMode, toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] =
    useIsAkkaSwapModeStatus()
  const fetcher: Fetcher<AkkaRouterArgsResponseType> = (url) =>
    fetch(url).then((r) => {
      if (r.status !== 200) {
        toggleSetAkkaModeToFalse()
      }
      return r.json()
    })
  const { chainId } = useActiveChainId()
  const { data, error } = useSWR(
    `https://icecream.akka.finance/swap?token0=${inputCurrencyId === TokenEnum.NativeToken ? TokenEnum.NativeTokenAdress : token0?.wrapped?.address
    }&token1=${outputCurrencyId === TokenEnum.NativeToken ? TokenEnum.NativeTokenAdress : token1?.wrapped?.address
    }&amount=${amount}&slipage=${slippage}&use_split=true&chain=${setChainName(chainId)}`,
    token0 && token1 && amount && slippage && (chainId === ChainId.BITGERT || chainId === ChainId.XDC) && fetcher,
    {
      refreshInterval: FAST_INTERVAL,
    },
  )
  return { data, error }
}

// Api with information for ui to show route
export const useAkkaRouterRoute = (token0: Currency, token1: Currency, amount: string, slippage = 0.1) => {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const [isAkkSwapMode, toggleSetAkkaMode, toggleSetAkkaModeToFalse, toggleSetAkkaModeToTrue] =
    useIsAkkaSwapModeStatus()
  const fetcher: Fetcher<AkkaRouterInfoResponseType> = (url) =>
    fetch(url).then((r) => {
      if (r.status !== 200) {
        toggleSetAkkaModeToFalse()
      }
      return r.json()
    })
  const { chainId } = useActiveChainId()
  const { data, error } = useSWR(
    `https://icecream.akka.finance/route?token0=${inputCurrencyId === TokenEnum.NativeToken ? TokenEnum.NativeTokenAdress : token0?.wrapped?.address
    }&token1=${outputCurrencyId === TokenEnum.NativeToken ? TokenEnum.NativeTokenAdress : token1?.wrapped?.address
    }&amount=${amount}&slipage=${slippage}&use_split=true&chain=${setChainName(chainId)}`,
    token0 && token1 && amount && slippage && (chainId === ChainId.BITGERT || chainId === ChainId.XDC) && fetcher,
    {
      refreshInterval: FAST_INTERVAL,
    },
  )
  return { data, error }
}

// Call both apis route and args together in the same time
export const useAkkaRouterRouteWithArgs = (token0: Currency, token1: Currency, amount: string, slippage = 0.1) => {
  const route = useAkkaRouterRoute(token0, token1, amount, slippage)
  const args = useAkkaRouterArgs(token0, token1, amount, slippage)

  return {
    route,
    args,
  }
}
