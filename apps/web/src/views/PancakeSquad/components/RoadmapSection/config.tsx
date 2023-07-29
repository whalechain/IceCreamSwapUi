import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '🚀',
    title: t('Launch'),
    description: [
      t('Launch of the Swap and liquidity provision functionality on Bitgert'),
      t('Multiple IceCream airdrops to the community'),
      t('Add Bitgert bridged tokens to the default token list'),
      t('Create an analytics page for the swap to show all pools, their liquidity, volume and much more'),
    ],
    reached: '06-2022',
  },
  {
    title: t('Partnerships'),
    icon: '👨‍',
    description: [
      t('Partner with and list Bitgert projects'),
      t('AMA sessions to spread the word and inform users'),
      t('Work very close with the Bitgert blockchain team'),
      t('More IceCream Airdrops'),
    ],
    reached: '07-2022',
  },
  {
    title: t('Multi Chain'),
    icon: '🌐',
    description: [
      t('Add more chains to our Bridge (Doken and Fuse)'),
      t('More AirDrops'),
      t('Super reliable Bridge')
    ],
    reached: '10-2022',
  },
  {
    title: t('Expansion'),
    icon: '🚀',
    description: [
      t('Partnerships with many big upcoming chains'),
      t('More AirDrops')
    ],
    reached: '11-2022',
  },
  {
    title: t('UI upgrades'),
    icon: '👨‍💻',
    description: [
      t('Upgrade from Uniswap based UI to Pancakeswap based UI'),
      t('Upgrade from weekly AirDrops to continuous liquidity farming')
    ],
    reached: '12-2022',
  },
  {
    title: t('Bridge UI upgrade and smart routing'),
    icon: '👨‍💻',
    description: [
      t('Integrate Bridge UI directly in the swap UI for a seamless experience'),
      t("Add smart routing capability's to drastically reduce price impact and greatly increase swap outputs")
    ],
    reached: '01-2023',
  },
  {
    title: t('CORE DAO expansion'),
    icon: '🚀',
    description: [
      t('First Dex and Bridge on Core Dao mainnet'),
      t('Add many new projects on Core Dao to default list'),
      t('Create liquid staking CORE token StakedCore(SCORE) smart contracts')
    ],
    reached: '02-2023',
  },
  {
    title: t('Launchpad, KYC token and enhanced smart routing'),
    icon: '🛡️',
    description: [
      t('Release LaunchPad'),
      t('Release Soulbound KYC token to drastically reduce scams'),
      t('Provide optimized swaps on supported chains through accessing the entire liquidity on the chain')
    ],
    reached: '03-2023',
  },
  {
    title: t('Expansion and infrastructure upgrades'),
    icon: '🌐',
    description: [
      t('Expand to Telos, Shardeum Testnet and Shimmer Testnet'),
      t('Upgrade infrastructure to have a unified high availability infrastructure to run all our services on'),
    ],
    reached: '07-2023',
  },
  {
    title: t('Audits and expansion'),
    icon: '🛡️',
    description: [
      t('release of audit reports of all our smart contracts'),
      t('Add support for Base chain'),
    ],
    reached: '08-2023',
  },
  {
    title: t('Trustless bridge upgrade and concentrated liquidity'),
    icon: '🔥',
    description: [
      t('Upgrade our DEX to support concentrated liquidity to drastically reduce slippage and increase capital efficiency'),
      t('Upgrade our Bridge to work in a fully trustless manner by utilizing an optimistic approach'),
    ],
    reached: '09-2023',
  },
  {
    title: t('Bridge speed upgrade and basic price oracles'),
    icon: '⏩',
    description: [
      t('Add an insured speed boost to the Bridge, which offloads the risk to the insurer and completes Bridge near instant'),
      t('Add price oracle for bridged tokens as well as on request'),
    ],
    reached: '10-2023',
  },
  {
    title: t('Mass expansion'),
    icon: '🚀🚀',
    description: [t('Expand to a lot of blockchains and provide optimal dex routing on them thanks to our smart routing')],
    reached: '11-2023',
  },
]
export default config