import { ChainId, Currency, CurrencyAmount } from '@pancakeswap/sdk'
import { AKKA_ROUTER_ADDRESS } from '@pancakeswap/smart-router/evm'
import { useApproveCallback } from 'hooks/useApproveCallback'
import { useMemo } from 'react'
import { useActiveChainId } from 'hooks/useActiveChainId'

// wraps useApproveCallback in the context of a swap
export function useApproveCallbackFromAkkaTrade(inputAmount: CurrencyAmount<Currency>) {
  const amountToApprove = useMemo(() => inputAmount || undefined, [inputAmount])
  const { chainId } = useActiveChainId()
  return useApproveCallback(amountToApprove, AKKA_ROUTER_ADDRESS[chainId])
}