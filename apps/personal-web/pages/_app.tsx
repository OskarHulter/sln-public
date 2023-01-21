import { SSRProvider } from '@react-aria/ssr'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { log } from 'next-axiom'
import React from 'react'
import trpc from '../utils/trpc.js'
// * _app.js/_app.ts - single line for Web Vitals
export { reportWebVitals } from 'next-axiom'

log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

const { globalMinimal, SharedUiProvider } = await import('@sln/ui-shared')

globalMinimal()
function HydrationProvider({ children, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </SSRProvider>
  )
}
function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationProvider>
        <SharedUiProvider>
          <Head>
            <meta charSet='utf-8' />
            <meta
              name='viewport'
              content='viewport-fit=cover, width=device-width, initial-scale=1'
            />
            <meta
              property='title'
              content={`Oskar Hulter - dev portfolio`}
              key='title'
            />
            <meta
              property='og:title'
              content={`Oskar Hulter - dev portfolio`}
              key='title'
            />
          </Head>
          <Component {...pageProps} />
        </SharedUiProvider>
        <ReactQueryDevtools />
      </HydrationProvider>
    </QueryClientProvider>
  )
}

export default trpc.withTRPC(MyApp)
