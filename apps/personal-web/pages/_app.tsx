import { DM_Sans, Inter, Raleway, Source_Code_Pro, Space_Grotesk } from '@next/font/google'
import localFont from '@next/font/local'
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

export const inter = Inter({
  variable: '--inter-font',
})
export const spaceGrotesk = Space_Grotesk({
  variable: '--space-grotesk-font',
})
export const raleway = Raleway({
  variable: '--raleway-font',
})
export const sourceCodePro = Source_Code_Pro({
  variable: '--source-code-pro-font',
})
export const dmSans = DM_Sans({
  variable: '--dm-sans-font',
  weight: '400',
})

export const switzer = localFont({
  src: '../public/fonts/switzer-variable.ttf',
  variable: '--switzer-font',
})
export const satoshi = localFont({
  src: '../public/fonts/satoshi-variable.ttf',
  variable: '--satoshi-font',
})
export const futuraMedium = localFont({
  src: '../public/fonts/futura-medium.ttf',
  variable: '--futura-medium-font',
  weight: '700',
})
export const futuraRound = localFont({
  src: '../public/fonts/futura-round.ttf',
  variable: '--futura-round-font',
  weight: '700',
})

export { reportWebVitals } from 'next-axiom'
if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  require('../mocks')
}
log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

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

globalStyles()
export const MyApp = ({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <SSRProvider>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NextThemesProvider
            enableSystem={false}
            enableColorScheme={true}
            defaultTheme='dark'
            attribute='class'
            value={{
              light: theme.dark.className,
              dark: theme.light.className,
            }}
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
              <main className={inter.className}>
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
