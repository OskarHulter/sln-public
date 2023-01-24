import { SSRProvider } from '@react-aria/ssr'
import type { ContentBlock, ContentList } from '@sln/domain-shared'
import { contentList } from '@sln/domain-shared'
import { PersonalWebUiProvider } from '@sln/ui'
import type { DehydratedState, QueryState } from '@tanstack/react-query'
import { dehydrate, Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import axios from 'axios'
// globalMinimal()
import type { GetStaticProps, InferGetStaticPropsType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
// *.ts - structured logging from client, edge, or server-side files
import { log } from 'next-axiom'
import { DefaultSeo } from 'next-seo'
import React from 'react'
import SEO from '../seo-default'

export { reportWebVitals } from 'next-axiom'

log.debug('new sign-in challenge', { customerId: 32423, auth: 'session' })

export type PageProps = {
  content: DehydratedState
}

export type ExtendedAppProps<P = object> = {
  err?: NextPageContext['err']
} & AppProps<P>

export const fetchContent = async (): Promise<ContentList> => {
  const { data } = await axios.get(`https://localhost:4200/content/`)
  return data
}

type CustomApp = (_: ExtendedAppProps<PageProps>) => JSX.Element
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['content'],
    queryFn: fetchContent,
    initialData: () => contentList,
  })

  const getContentCache = (name: string) => {
    const { data }: QueryState<ContentList> = queryClient.getQueryState(['content'])
    if (data) {
      // return the individual todo
      return data.find((d: ContentBlock) => d.name === name)
    }
    return contentList[0]
  }

  return {
    props: {
      content: dehydrate(queryClient),
      getContentCache,
    },
  }
}
export const MyApp: CustomApp = ({
  Component,
  pageProps,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
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

export default MyApp
