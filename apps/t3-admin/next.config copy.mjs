//@ts-check
import withNx from '@nrwl/next/plugins/with-nx'
import withAxiom from 'next-axiom'
import withBundleAnalyzer from '@next/bundle-analyzer'

// /**
//  * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
//  **/
const nextConfig = withNx({
  reactStrictMode: true,
  swcMinify: true,
  bundleAnalyzer: {
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: true,
  },
  nx: {
    svgr: true,
  },
})

// webpack: (config, { isServer }) => {
//   // Fixes npm packages that depend on `fs` module
//   if (!isServer) {
//     config.node = {
//       fs: 'empty',
//     }
//   }

//   return config
// },

const buildConfig = async (_phase) => {
  const plugins = [withAxiom, withBundleAnalyzer]
  const config = await plugins.reduce((acc, next) => next(acc), {
    ...nextConfig,
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
  })
  return config
}

export default buildConfig
