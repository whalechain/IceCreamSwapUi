/* eslint-disable @typescript-eslint/no-var-requires */
import BundleAnalyzer from '@next/bundle-analyzer'
import { withSentryConfig } from '@sentry/nextjs'
import { withAxiom } from 'next-axiom'
import path from 'path'
import { fileURLToPath } from 'url'
import smartRouterPkgs from '@pancakeswap/smart-router/package.json' assert { type: 'json' }
import { withWebSecurityHeaders } from '@pancakeswap/next-config/withWebSecurityHeaders'
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const withBundleAnalyzer = BundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})
const withVanillaExtract = createVanillaExtractPlugin()

const sentryWebpackPluginOptions =
  process.env.VERCEL_ENV === 'production'
    ? {
        // Additional config options for the Sentry Webpack plugin. Keep in mind that
        // the following options are set automatically, and overriding them is not
        // recommended:
        //   release, url, org, project, authToken, configFile, stripPrefix,
        //   urlPrefix, include, ignore
        silent: false, // Logging when deploying to check if there is any problem
        validate: true,
        hideSourceMaps: false,
        // https://github.com/getsentry/sentry-webpack-plugin#options.
      }
    : {
        hideSourceMaps: false,
        silent: true, // Suppresses all logs
        dryRun: !process.env.SENTRY_AUTH_TOKEN,
      }

const workerDeps = Object.keys(smartRouterPkgs.dependencies)
  .map((d) => d.replace('@pancakeswap/', 'packages/'))
  .concat(['/packages/smart-router/', '/packages/swap-sdk/', '/packages/token-lists/'])

/** @type {import('next').NextConfig} */
const config = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    scrollRestoration: true,
    outputFileTracingRoot: path.join(__dirname, '../../'),
    outputFileTracingExcludes: {
      '*': ['**@swc+core*', '**/@esbuild**'],
    },
  },
  transpilePackages: [
    '@pancakeswap/ui',
    '@pancakeswap/uikit',
    '@pancakeswap/swap-sdk-core',
    '@pancakeswap/farms',
    '@pancakeswap/localization',
    '@pancakeswap/hooks',
    '@pancakeswap/multicall',
    '@pancakeswap/token-lists',
    '@pancakeswap/utils',
    '@pancakeswap/tokens',
    '@wagmi',
    'wagmi',
    '@pancakeswap/pools',
    'react-countup',
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    deviceSizes: [50, 150, 200, 300, 400, 640, 750, 828, 1080, 1200],
  },
  async rewrites() {
    return [
      {
        source: '/default.tokenlist.json',
        destination: "/api/trpc/token.defaultList"
      },
      {
        source: '/info/token/:address',
        destination: '/info/tokens/:address',
      },
      {
        source: '/info/pool/:address',
        destination: '/info/pools/:address',
      },
      {
        source: '/kyc-meta',
        destination: '/api/kyc-meta',
      }
    ]
  },
  async headers() {
    return [
      {
        source: '/favicon.ico',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/logo.png',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/images/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/images/tokens/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, immutable, max-age=604800',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/send',
        destination: '/swap',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/rx6WGBPTty',
        permanent: false,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/Icecreamswap_com',
        permanent: false,
      },
      {
        source: '/swap/:outputCurrency',
        destination: '/swap?outputCurrency=:outputCurrency',
        permanent: true,
      },
      {
        source: '/create/:currency*',
        destination: '/add/:currency*',
        permanent: true,
      },
      {
        source: '/farms/archived',
        destination: '/farms/history',
        permanent: true,
      },
      {
        source: '/pool',
        destination: '/liquidity',
        permanent: true,
      },
      {
        source: '/staking',
        destination: '/pools',
        permanent: true,
      },
      {
        source: '/syrup',
        destination: '/pools',
        permanent: true,
      },
      {
        source: '/collectibles',
        destination: '/nfts',
        permanent: true,
      },
      {
        source: '/info/pools',
        destination: '/info/pairs',
        permanent: true,
      },
      {
        source: '/info/pools/:address',
        destination: '/info/pairs/:address',
        permanent: true,
      },
      {
        source: '/api/v3/:chainId/farms/liquidity/:address',
        destination: 'https://farms-api.pancakeswap.com/v3/:chainId/liquidity/:address',
        permanent: false,
      },
      {
        source: '/images/tokens/:address',
        destination: 'https://tokens.pancakeswap.finance/images/:address',
        permanent: false,
      },
    ]
  },
  typescript: {
    tsconfigPath: 'tsconfig.build.json',
    ignoreBuildErrors: true
  }
}


export default withBundleAnalyzer(
  withVanillaExtract(withSentryConfig(withAxiom(withWebSecurityHeaders(config)), sentryWebpackPluginOptions)),
)
