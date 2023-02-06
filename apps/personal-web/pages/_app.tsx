import { Inter } from '@next/font/google'
import { SSRProvider } from '@react-aria/ssr'
import { fetchContent } from '@sln/data-access-shared'
import { globalStyles, WebUiProvider } from '@sln/ui'
import type { DehydratedState } from '@tanstack/react-query'
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { GetStaticProps } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { DefaultSeo } from 'next-seo'
import { useState } from 'react'
import SEO from '../seo-default'

export { reportWebVitals } from 'next-axiom'
export const inter = Inter({
  variable: '--inter-font',
})
// if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
//   require('../mocks')
// }

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
          <WebUiProvider fonts={inter.className}>
            <DefaultSeo {...SEO} />
            <Head>
              <meta charSet='utf-8' />
              <meta
                name='viewport'
                content='viewport-fit=cover, width=device-width, initial-scale=1'
              />
            </Head>
            <Component
              className={inter.className}
              {...pageProps}
            />
          </WebUiProvider>

          <ReactQueryDevtools />
        </Hydrate>
      </QueryClientProvider>
    </SSRProvider>
  )
}

export default MyApp
// export const spaceGrotesk = Space_Grotesk({
//   variable: '--space-grotesk-font',
// })
// export const raleway = Raleway({
//   variable: '--raleway-font',
// })
// export const switzer = localFont({
//   src: '../public/fonts/switzer-variable.ttf',
//   variable: '--switzer-font',
// })
// export const satoshi = localFont({
//   src: '../public/fonts/satoshi-variable.ttf',
//   variable: '--satoshi-font',
// })

// const getContentCache = (name: string) => {
//   const { data }: QueryState<ContentList> = queryClient.getQueryState(['content'])
//   if (data) {
//     // return the individual todo
//     return data.find((d: ContentBlock) => d.name === name)
//   }
//   return contentList[0]
// }
// type CustomApp = (_: ExtendedAppProps<PageProps>) => JSX.Element
//   < NextThemesProvider
// enableColorScheme = { true}
// defaultTheme = 'dark'
// attribute = 'class'
// value = {{
//   light: theme.dark.className,
//     dark: theme.light.className,
//             }}
//           >
//                 </ >
