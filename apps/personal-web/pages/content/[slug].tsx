import { Container } from '@nextui-org/react'
import type { ContentBlock, ContentList } from '@sln/domain-shared'
import { Layout } from '@sln/ui'
import axios from 'axios'
import { InferGetStaticPropsType } from 'next'

// pages/content/[id].tsx

function ContentPage({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout>
      <Container
        justify='center'
        css={{ width: 'full' }}
        as='main'
      >
        {data.id}
        {data.name}
      </Container>
    </Layout>
  )
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: 'false',
    }
  }

  // Call an external API endpoint to get Contents
  const res = await axios.get<ContentList>('https://.../content')

  const data = res.data
  // Get the paths we want to prerender based on Contents
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = data.map((Content) => ({
    params: { id: Content.id },
  }))

  // {fallback: false } means other routes should 404
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the Content `id`.
  // If the route is like /Contents/1, then params.id is 1
  const { data } = await axios.get<ContentBlock>(`https://.../contents/${params.name}`)
  if (!data) return { props: {} }
  // Pass Content data to the page via props
  return { props: { data } }
}

export default ContentPage
