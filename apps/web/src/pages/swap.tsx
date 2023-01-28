import { ChainId } from '@pancakeswap/sdk'
import Swap from '../views/Swap'
import { SwapFeaturesProvider } from '../views/Swap/SwapFeaturesContext'

const SwapPage = () => {
  return (
    <SwapFeaturesProvider>
      <Swap />
    </SwapFeaturesProvider>
  )
}

SwapPage.chains = [ChainId.BITGERT, ChainId.DOGE, ChainId.DOKEN, ChainId.FUSE, ChainId.XDC]

export default SwapPage
