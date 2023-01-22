import { SSRProvider } from '@react-aria/ssr'
import type { BaseProps } from '@sln/ui-shared'
import { globalMinimal, PersonalWebUiProvider } from '@sln/ui-shared'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { log } from 'next-axiom'
import React from 'react'
// * _app.js/_app.ts - single line for Web Vitals
export { reportWebVitals } from 'next-axiom'

log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

globalMinimal()
function HydrationProvider({ children, pageProps }: AppProps & BaseProps) {
  return (
    <SSRProvider>
      <Hydrate state={pageProps.dehydratedState}>{children}</Hydrate>
    </SSRProvider>
  )
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationProvider {...pageProps}>
        <PersonalWebUiProvider>
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
        </PersonalWebUiProvider>
        <ReactQueryDevtools />
      </HydrationProvider>
    </QueryClientProvider>
  )
}
