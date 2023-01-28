// @ts-check
import { withNx } from '@nrwl/next/plugins/with-nx.js'
import { withAxiom } from 'next-axiom'
import withBundleAnalyzer from '@next/bundle-analyzer'

/** @type {import('@nrwl/next/plugins/with-nx').WithNxOptions} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  nx: {
    svgr: true,
  },
  experimental: {
    fontLoaders: [
      {
        loader: '@next/font/google',
        options: {
          subsets: ['latin'],
        },
      },
      {
        loader: '@next/font/local',
        options: {
          subsets: ['latin'],
        },
      },
    ],
  },
}

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})

export default withNx(
  withAxiom({
    ...bundleAnalyzer,
    ...nextConfig,
    webpack: (config, { isServer }) => {
      if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on
        // build --> Error: Can't resolve 'fs'
        // or config.node
        config.resolve.fallback = {
          fs: false,
          path: false,
        }
      }
      return config
    },
  })
)
