import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

export const farmsV3 = defineFarmV3Configs([
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize })))

export default farmsV3
