import { bscTokens } from '@pancakeswap/tokens'

import { PoolCategory, SerializedPool } from '../../types'

export const livePools: SerializedPool[] = [
  // {
  //   sousId: 0,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.cake,
  //   contractAddress: '0xa5f8C5Dbd5F286960b9d90548680aE5ebFf07652',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '10',
  //   isFinished: false,
  // },
  // {
  //   sousId: 343,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.edu,
  //   contractAddress: '0x3d2d34Ea77B3702B7634C8D208feC5E08CEa88B6',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.05425',
  //   version: 3,
  // },
  // {
  //   sousId: 342,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.ush,
  //   contractAddress: '0x6Db79ba7c0A6DDC48cFDd79Df6cb757b9E8B51DD',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.1851',
  //   version: 3,
  // },
  // {
  //   sousId: 341,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.pstake,
  //   contractAddress: '0x17086aF09D63852aD4646f1f837b34e171bEa99B',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.5497',
  //   version: 3,
  // },
  // {
  //   sousId: 329,
  //   stakingToken: bscTokens.hay,
  //   earningToken: bscTokens.cake,
  //   contractAddress: '0x1c7D573D9614187096276a01Ec15263FCa820BDD',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.0121',
  //   version: 3,
  // },
  // {
  //   sousId: 328,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.rdnt,
  //   contractAddress: '0xb87d170eC2C22F6078C9ed3214aB6f47f4A924D2',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.3342',
  //   version: 3,
  // },
  // {
  //   sousId: 327,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.id,
  //   contractAddress: '0x7aCcC054bB199ca976C95aee495C9888f566AaAA',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.07716',
  //   version: 3,
  // },
  // {
  //   sousId: 326,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.unw,
  //   contractAddress: '0x929641DF8F11b6460efAdb09db357717C60003E1',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.7716',
  //   version: 3,
  // },
  // {
  //   sousId: 325,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.lvl,
  //   contractAddress: '0x1394a09F868bE27B1c8D39D79F0b0D6f112bddAf',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.009765',
  //   version: 3,
  // },
  // {
  //   sousId: 324,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.caps,
  //   contractAddress: '0xA31a351e3FBE3278949242Ff152317c12cd786e2',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '2.7',
  //   version: 3,
  // },
  // {
  //   sousId: 323,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.sd,
  //   contractAddress: '0xaEC63F134a7853C6DaC9BA428d7962cD7C6c5e30',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '0.01022',
  //   version: 3,
  // },
  // {
  //   sousId: 321,
  //   stakingToken: bscTokens.cake,
  //   earningToken: bscTokens.csix,
  //   contractAddress: '0x8BD7b0d392D2dE8F682704A3186A48467FcDC7AC',
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '8.68',
  //   version: 3,
  // },
].map((p: any) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p: any) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export const pools: SerializedPool[] = [...livePools, ...finishedPools]
