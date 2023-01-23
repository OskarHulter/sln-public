import { SSRProvider } from '@react-aria/ssr'
import { globalMinimal, PersonalWebUiProvider } from '@sln/ui'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { log } from 'next-axiom'
import { DefaultSeo } from 'next-seo'
import React from 'react'
import SEO from '../seo-default'

export { reportWebVitals } from 'next-axiom'

log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

globalMinimal()

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <SSRProvider>
        <Hydrate state={pageProps.dehydratedState}>
          <PersonalWebUiProvider>
            <DefaultSeo {...SEO} />
            <Head>
              <meta charSet='utf-8' />
              <meta
                name='viewport'
                content='viewport-fit=cover, width=device-width, initial-scale=1'
              />
            </Head>
            <Component {...pageProps} />
          </PersonalWebUiProvider>
          <ReactQueryDevtools />
        </Hydrate>
      </SSRProvider>
    </QueryClientProvider>
  )
}
