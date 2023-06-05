import { ROUTER_ADDRESS } from 'config/constants/exchange'
import { ChainId, Currency, CurrencyAmount } from '@pancakeswap/sdk'
import { useApproveCallback } from 'hooks/useApproveCallback'
import { useMemo } from 'react'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useIsAkkaAlternateModeActive } from 'state/global/hooks'

// wraps useApproveCallback in the context of a swap
export function useApproveCallbackFromAkkaTrade(inputAmount: CurrencyAmount<Currency>) {
  const amountToApprove = useMemo(() => inputAmount || undefined, [inputAmount])
  const { chainId } = useActiveChainId()
  const [isAkkaAlternateActive, toggleSetAkkaAlternateActive, toggleSetAkkaAlternateActiveToFalse, toggleSetAkkaAlternateActiveToTrue] = useIsAkkaAlternateModeActive()
  return useApproveCallback(amountToApprove, isAkkaAlternateActive && chainId === ChainId.CORE ? ROUTER_ADDRESS[ChainId.CORE].AkkaAlternate : ROUTER_ADDRESS[chainId].Akka)
}