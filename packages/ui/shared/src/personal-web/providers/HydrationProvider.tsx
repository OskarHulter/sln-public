import { SSRProvider } from '@react-aria/ssr'
import { Hydrate } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import type { BaseProps } from '../../types'

export default function HydrationProvider({ children, pageProps }: AppProps & BaseProps) {
  return (
    <SSRProvider>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </SSRProvider>
  )
}
