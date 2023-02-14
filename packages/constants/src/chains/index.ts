import { bitgert } from './bitgert'
import { bsc } from './bsc'
import { core } from './core'
import { dogechain } from './dogechain'
import { dokenchain } from './dokenchain'
import { fuse } from './fuse'
import { xdc } from './xdc'

export const chains = [bitgert, bsc, core, dogechain, dokenchain, fuse, xdc]

export enum ChainId {
  BITGERT = bitgert.id,
  BSC = bsc.id,
  CORE = core.id,
  DOGE = dogechain.id,
  DOKEN = dokenchain.id,
  FUSE = fuse.id,
  XDC = xdc.id,
}
