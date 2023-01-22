import type { Bridge } from '@chainsafe/chainbridge-contracts'
import { BridgeFactory } from '@chainsafe/chainbridge-contracts'
import type { BridgeChain } from './config'
import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { useSigner } from 'wagmi'
import { useWeb3React } from '@pancakeswap/wagmi'
import { bridgeChains } from './config'
import { Currency, ERC20Token } from '@pancakeswap/sdk'
import { useTokenBalances } from 'state/wallet/hooks'

type Tokens = { [address: string]: ERC20Token }

export type TransactionStatus =
  | 'Initializing Transfer'
  | 'Approve 0'
  | 'Approve'
  | 'Deposit'
  | 'In Transit'
  | 'Transfer Completed'
  | 'Transfer Aborted'

interface BridgeContext {
  bridge: Bridge
  homeChainConfig: BridgeChain
  destinationChainConfig: BridgeChain
  setDestinationChainId: (id: number) => void
  destinationChainId: number
  currency?: Currency
  setCurrency: (currency: Currency) => void
  depositAmount: string
  setDepositAmount: (amount: string) => void
  recipient?: string
  setRecipient: (recipient: string) => void
  toOtherAddress: boolean
  setToOtherAddress: (toOtherAddress: boolean) => void
  tokens: Tokens
  tokenBalances: ReturnType<typeof useTokenBalances>

  transactionStatus?: TransactionStatus
  setTransactionStatus: (status: TransactionStatus) => void
  depositNonce?: string
  setDepositNonce: (nonce: string) => void
  homeTransferTxHash?: string
  setHomeTransferTxHash: (hash: string) => void
}

const BridgeContext = createContext<BridgeContext | undefined>(undefined)

export const BridgeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { chainId, account } = useWeb3React()
  const [currency, setCurrency] = useState<Currency | undefined>()
  const [depositAmount, setDepositAmount] = useState('0')
  const [destinationChainId, setDestinationChainId] = useState<number | undefined>()
  useEffect(() => {
    setDestinationChainId(bridgeChains.find((chain) => chain.networkId !== chainId)?.networkId)
  }, [chainId])
  const homeChainConfig = useMemo(() => bridgeChains.find((chain) => chain.networkId === chainId), [chainId])
  const destinationChainConfig = useMemo(
    () => bridgeChains.find((chain) => chain.networkId === destinationChainId),
    [destinationChainId],
  )
  const signer = useSigner()
  const [bridge, setBridge] = useState<Bridge | undefined>()
  useEffect(() => {
    if (signer?.data && homeChainConfig?.bridgeAddress) {
      setBridge(BridgeFactory.connect(homeChainConfig.bridgeAddress, signer.data))
    }
  }, [signer?.data, homeChainConfig?.bridgeAddress])
  const [recipient, setRecipient] = useState<string>()
  const [toOtherAddress, setToOtherAddress] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState<TransactionStatus | undefined>()
  const [depositNonce, setDepositNonce] = useState<string | undefined>()
  const [homeTransferTxHash, setHomeTransferTxHash] = useState<string | undefined>()

  const tokens = useMemo(
    () =>
      homeChainConfig?.tokens.reduce<Tokens>((acc, current) => {
        if (!destinationChainConfig?.tokens.find((token) => token.resourceId === current.resourceId)) return acc
        return {
          ...acc,
          [current.address]: new ERC20Token(
            chainId,
            current.address,
            homeChainConfig.decimals,
            current.symbol,
            current.name,
          ),
        }
      }, {}),
    [chainId, destinationChainConfig, homeChainConfig],
  )
  const tokenBalances = useTokenBalances(
    account,
    useMemo(() => Object.values(tokens || {}), [tokens]),
  )

  return (
    <BridgeContext.Provider
      value={{
        bridge,
        homeChainConfig,
        destinationChainConfig,
        setDestinationChainId,
        currency,
        setCurrency,
        depositAmount,
        setDepositAmount,
        destinationChainId,
        recipient: toOtherAddress ? recipient : account,
        setRecipient,
        toOtherAddress,
        setToOtherAddress,
        tokens,
        tokenBalances,
        depositNonce,
        setDepositNonce,
        transactionStatus,
        setTransactionStatus,
        homeTransferTxHash,
        setHomeTransferTxHash,
      }}
    >
      {children}
    </BridgeContext.Provider>
  )
}

export const useBridge = () => {
  const context = useContext(BridgeContext)
  if (context === undefined) {
    throw new Error('useBridgeContext must be used within a BridgeProvider')
  }
  return context
}
