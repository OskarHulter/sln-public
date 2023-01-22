import { Container, Spacer } from '@nextui-org/react'
import { fetchContent } from '@sln/data-access-shared'
import { Hero, Layout, MailForm } from '@sln/ui'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { NextPage } from 'next'
import type { InferGetStaticPropsType } from 'next/types'
import { NextSeo } from 'next-seo'

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['initialContent'],
    queryFn: () => fetchContent(),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(props)
  return (
    <>
      <NextSeo
        title='Using More of Config'
        description='This example uses more of the available config options.'
        canonical='https://www.canonical.ie/'
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          siteName: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <Container
          justify='center'
          css={{ width: 'full' }}
          as='main'
        >
          <Hero />
          <Spacer y={2} />
          <Spacer y={2} />
          <Spacer y={2} />
          <MailForm />
        </Container>
      </Layout>
    </>
  )
}

export default Home
