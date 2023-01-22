//@ts-check
import { withNx } from '@nrwl/next/plugins/with-nx.js'
import { withAxiom } from 'next-axiom'
// eslint-disable-next-line @typescript-eslint/no-var-requires
//const { withNx } = require('@nrwl/next/plugins/with-nx')
//const { withAxiom } = require('next-axiom')

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  experimental: {
    esmExternals: 'loose',
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    // svgr: false,
  },
}

export default withAxiom(withNx(nextConfig))
