import { SSRProvider } from '@react-aria/ssr'
import { Hydrate } from '@tanstack/react-query'
import { AppProps } from 'next/app.js'
import { BaseProps } from '../../types.js'

export default function HydrationProvider({ children, pageProps }: AppProps & BaseProps) {
  return (
    <SSRProvider>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </SSRProvider>
  )
}
