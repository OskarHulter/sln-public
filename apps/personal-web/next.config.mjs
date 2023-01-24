//@ts-check
import withNx from '@nrwl/next/plugins/with-nx.js'
import withAxiom from 'next-axiom'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // experimental: {
  //   esmExternals: 'loose',
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
      config.resolve.fallback = {
        fs: false,
        path: false,
      }
    }

    return config
  },
}

export default withPlugins(
  [
    [
      withNx,
      {
        nx: {
          svgr: true,
        },
      },
    ],
    [withAxiom],
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
        openAnalyzer: true,
      },
    ],
  ],
  nextConfig
)
