import { Raleway, Space_Grotesk } from '@next/font/google'
import { SSRProvider } from '@react-aria/ssr'
import { fetchContent } from '@sln/data-access-shared'
import { globalStyles, theme, WebUiProvider } from '@sln/ui'
import type { DehydratedState } from '@tanstack/react-query'
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { log } from 'next-axiom'
import { DefaultSeo } from 'next-seo'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useState } from 'react'
import SEO from '../seo-default'

export { reportWebVitals } from 'next-axiom'
if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../mocks')
}
log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })
const nextUiTheme = {
  light: theme.dark.className,
  dark: theme.light.className,
}
// const getContentCache = (name: string) => {
//   const { data }: QueryState<ContentList> = queryClient.getQueryState(['content'])
//   if (data) {
//     // return the individual todo
//     return data.find((d: ContentBlock) => d.name === name)
//   }
//   return contentList[0]
// }
// type CustomApp = (_: ExtendedAppProps<PageProps>) => JSX.Element
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        refetchOnMount: false,
        keepPreviousData: true,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        queryFn: () => fetchContent(),
        initialData: () => fetchContent(),
        onError: () => console.error('error!'),
      },
    },
  })
  await queryClient.prefetchQuery(['contentList'])

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--raleway-font',
})
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--space-grotesk-font',
})
globalStyles()
export const MyApp = ({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextThemesProvider
            defaultTheme='dark'
            attribute='class'
            value={nextUiTheme}
          >
            <WebUiProvider initialized={true}>
              <DefaultSeo {...SEO} />
              <Head>
                <meta charSet='utf-8' />
                <meta
                  name='viewport'
                  content='viewport-fit=cover, width=device-width, initial-scale=1'
                />
              </Head>
              <main className={raleway.className}>
                <Component {...pageProps} />
              </main>
            </WebUiProvider>
          </NextThemesProvider>

          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </SSRProvider>
  )
}

export default MyApp
