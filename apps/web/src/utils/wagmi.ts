import { BinanceWalletConnector } from '@pancakeswap/wagmi/connectors/binanceWallet'
import { BloctoConnector } from '@pancakeswap/wagmi/connectors/blocto'
import { TrustWalletConnector } from '@pancakeswap/wagmi/connectors/trustWallet'
import { CHAINS } from 'config/chains'
import memoize from 'lodash/memoize'
import { configureChains, createClient } from 'wagmi'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { LedgerConnector } from 'wagmi/connectors/ledger'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectLegacyConnector } from 'wagmi/connectors/walletConnectLegacy'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

export const { provider, chains } = configureChains(CHAINS, [
  jsonRpcProvider({
    rpc: (chain) => {
      return { http: chain.rpcUrls.default.http[0] }
    },
  }),
])

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: 'PancakeSwap',
    appLogoUrl: 'https://pancakeswap.com/logo.png',
  },
})

export const walletConnectConnector = new WalletConnectLegacyConnector({
  chains,
  options: {
    qrcode: true,
  },
})

export const walletConnectNoQrCodeConnector = new WalletConnectLegacyConnector({
  chains,
  options: {
    qrcode: false,
  },
})

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

const bloctoConnector = new BloctoConnector({
  chains,
  options: {
    defaultChainId: 56,
    appId: 'e2f2f0cd-3ceb-4dec-b293-bb555f2ed5af',
  },
})

const ledgerConnector = new LedgerConnector({
  chains,
})

export const bscConnector = new BinanceWalletConnector({ chains })

export const trustWalletConnector = new TrustWalletConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
})

class BitKeepConnector extends InjectedConnector {
  provider?: Window['ethereum']

  public id = 'bitKeep'

  async getProvider() {
    this.provider = (window as any).bitkeep?.ethereum
    return this.provider
  }
}

export const bitKeepConnector = new BitKeepConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

class NaboxConnector extends InjectedConnector {
  provider?: Window['ethereum']

  public id = 'nabox'

  async getProvider() {
    if (!(window as any).NaboxWallet) throw new Error('Nabox not found')
    this.provider = (window as any).ethereum
    return this.provider
  }
}

export const naboxConnector = new NaboxConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
})

class OkxConnector extends InjectedConnector {
  provider?: Window['ethereum']

  public id = 'okx'

  async getProvider() {
    if (!(window as any).okxwallet) throw new Error('Okx Wallet not found')
    this.provider = (window as any).okxwallet
    return this.provider
  }
}

export const okxConnector = new OkxConnector({
  chains,
  options: {
    shimDisconnect: true,
  },
})

export const client = createClient({
  autoConnect: false,
  provider,
  connectors: [
    metaMaskConnector,
    injectedConnector,
    coinbaseConnector,
    walletConnectConnector,
    bscConnector,
    bitKeepConnector,
    naboxConnector,
    okxConnector,
    bloctoConnector,
    ledgerConnector,
    trustWalletConnector,
  ],
})

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => (CHAIN_IDS as number[]).includes(chainId))
export const isChainTestnet = memoize((chainId: number) => {
  const found = chains.find((c) => c.id === chainId)
  return found ? 'testnet' in found : false
})
