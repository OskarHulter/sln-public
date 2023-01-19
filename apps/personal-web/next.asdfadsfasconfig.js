//@ts-check
import { withNx } from '@nrwl/next/plugins/with-nx.js'

/**
 * @type {import('@nrwl/next/plugins/with-nx.js').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
}

module.exports = withNx(nextConfig)
