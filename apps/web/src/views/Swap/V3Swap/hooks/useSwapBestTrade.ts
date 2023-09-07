import { TradeType } from "@pancakeswap/sdk";
import tryParseAmount from '@pancakeswap/utils/tryParseAmount'
import { useUserSingleHopOnly } from '@pancakeswap/utils/user'

import { useSwapState } from 'state/swap/hooks'
import { Field } from 'state/swap/actions'
import { useCurrency } from 'hooks/Tokens'
import { useBestAMMTrade } from 'hooks/useBestAMMTrade'
import { useDeferredValue, useEffect, useState } from "react";
import {
  useUserSplitRouteEnable,
  useUserStableSwapEnable,
  useUserV2SwapEnable,
  useUserV3SwapEnable,
} from 'state/user/smartRouter'
import { useProvider } from "wagmi";
import { LegacyRouter } from "@pancakeswap/smart-router/evm";

interface Options {
  maxHops?: number
}

export function useSwapBestTrade({ maxHops }: Options = {}) {
  const {
    independentField,
    typedValue,
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)
  const isExactIn = independentField === Field.INPUT
  const independentCurrency = isExactIn ? inputCurrency : outputCurrency
  const dependentCurrency = isExactIn ? outputCurrency : inputCurrency
  const tradeType = isExactIn ? TradeType.EXACT_INPUT : TradeType.EXACT_OUTPUT
  const amount = tryParseAmount(typedValue, independentCurrency ?? undefined)

  const [singleHopOnly] = useUserSingleHopOnly()
  const [split] = useUserSplitRouteEnable()
  const [v2Swap] = useUserV2SwapEnable()
  const [v3Swap] = useUserV3SwapEnable()
  const [stableSwap] = useUserStableSwapEnable()
  const provider = useProvider()

  const [bestTradeV2, setBestTradeV2] = useState(null)

  const { isLoading, trade, refresh, syncing, isStale, error } = useBestAMMTrade({
    amount,
    currency: dependentCurrency,
    baseCurrency: independentCurrency,
    tradeType,
    maxHops: singleHopOnly ? 1 : maxHops,
    maxSplits: split ? undefined : 0,
    v2Swap,
    v3Swap,
    stableSwap,
    type: 'auto',
  })

  const isAllLoading = useDeferredValue(isLoading || (typedValue && !trade && !error))

  useEffect(() => {
    if (!amount) return
    const getV2Trade = async () => {
      const getBestV2Trade = isExactIn ? LegacyRouter.getBestTradeExactIn : LegacyRouter.getBestTradeExactOut
      const v2Trade = await getBestV2Trade(
        amount,
        outputCurrency,
        {
          provider: _ => provider
        }
      )

      const v2TradeAsSmartRouterTrade = {
        tradeType: v2Trade.tradeType,
        inputAmount: v2Trade.inputAmount,
        outputAmount: v2Trade.outputAmount,
        routes: [{
          inputAmount: v2Trade.inputAmount,
          outputAmount: v2Trade.outputAmount,
          path: v2Trade.route.path,
          pools: v2Trade.route.pairs.map(pair => {
            return {
              address: pair.liquidityToken.address,
              reserve0: pair.reserve0,
              reserve1: pair.reserve1,
              type: 0
            }
          }),
          type: v2Trade.route.routeType,
          percent: 100
        }],
      }

      setBestTradeV2(v2TradeAsSmartRouterTrade)
    }
    getV2Trade()
  }, [provider, typedValue, outputCurrency, isExactIn])

  if (
    bestTradeV2 &&
    (!trade || trade.outputAmount.lessThan(bestTradeV2.outputAmount))
  ) {
    return {
      refresh,
      syncing: false,
      isStale: false,
      error,
      isLoading: false,
      trade: typedValue ? bestTradeV2 : null,
    }
  }

  return {
    refresh,
    syncing,
    isStale,
    error,
    isLoading: isAllLoading,
    trade: typedValue ? trade : null,
  }
}
