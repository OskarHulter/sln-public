import { fetchContent } from '@sln/data-access-shared'
import { Hero, Layout, Projects } from '@sln/ui-shared'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { NextPage } from 'next'
import { InferGetStaticPropsType } from 'next/types'
import React from 'react'

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
const About: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  )
}

export default About
