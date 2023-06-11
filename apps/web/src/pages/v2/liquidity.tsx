import Liquidity from '../views/Pool'
import {SUPPORT_SWAP} from "../config/constants/supportChains";
import { CHAIN_IDS } from 'utils/wagmi'
import Liquidity from '../../views/Pool'

const LiquidityPage = () => <Liquidity />

LiquidityPage.chains = SUPPORT_SWAP

export default LiquidityPage
