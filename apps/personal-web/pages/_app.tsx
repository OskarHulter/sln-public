import { SSRProvider } from '@react-aria/ssr'
import { globalMinimal, SharedUiProvider } from '@sln/ui-shared'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProps } from 'next/app.js'
import { Head } from 'next/document.js'
import React from 'react'

globalMinimal()
export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
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
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SSRProvider>
  )
}
