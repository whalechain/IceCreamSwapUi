import { CHAIN_IDS } from 'utils/wagmi'
import { BridgeProvider } from 'views/Bridge/BridgeProvider'
import Bridge from '../views/Bridge'

const BridgePage = () => {
  return (
    <BridgeProvider>
      <Bridge />
    </BridgeProvider>
  )
}

BridgePage.chains = CHAIN_IDS

export default BridgePage
