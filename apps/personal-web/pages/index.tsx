import { Container, Spacer } from '@nextui-org/react'
import { ContentBlock, ContentId } from '@sln/domain-shared'
//import { fetchContent, useContentQuery } from '@sln/data-access-shared'
import { Hero, Layout, MailForm } from '@sln/ui'
import axios from 'axios'
import { InferGetStaticPropsType } from 'next'
//import { dehydrate, QueryClient } from '@tanstack/query-core'
//import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { NextSeo } from 'next-seo'
import { getStaticProps } from './_app'

export const fetchContent = async (slug: ContentId): Promise<ContentBlock> => {
  const { data } = await axios.get(`content/${slug}`)
  return data
}

// { content }: InferGetStaticPropsType<typeof getStaticProps>
export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container
        justify='center'
        css={{ width: 'full' }}
        as='main'
      >
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
            handle: '@OHulter',
            site: '@oskarhulter.com',
            cardType: 'summary_large_image',
          }}
        />

        <Hero />
        <Spacer y={2} />
        <MailForm />
      </Container>
    </Layout>
  )
}
