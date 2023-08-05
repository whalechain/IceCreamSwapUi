import { defineFarmV3Configs } from '../src/defineFarmV3Configs'
import { SerializedFarmConfig } from "../src";

export const farmsV3 = defineFarmV3Configs([
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize })))

const farms: SerializedFarmConfig[] = [
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
