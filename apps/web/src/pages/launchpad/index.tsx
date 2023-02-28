import LaunchpadList from 'views/Launchpad/LaunchpadList'
import { Launchpad } from 'views/Launchpad/types/Launchpad'

const launchpads: Launchpad[] = [
  {
    id: '1',
    price: '1 GG = 187 ICE',
    address: '0x681ca81F68D94d37ff47C391ECc905279aD9E6E7',
    chainId: 1116,
    sold: 13,
    total: 1337,
    startTime: new Date().valueOf(),
    endTime: new Date().setMonth(5),
    liquidity: 75,
    lockupTime: 30,
  },
]

const LaunchpadPage = () => {
  return <LaunchpadList launchpads={launchpads} />
}

LaunchpadPage.chains = [1116]

export default LaunchpadPage
