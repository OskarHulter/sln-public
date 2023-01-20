import { dehydrate, QueryClient } from '@tanstack/react-query'
import { NextPage } from 'next'
import { InferGetStaticPropsType } from 'next/types'
import React from 'react'

const { fetchContent } = await import('@sln/data-access-shared')
const { Hero, Layout, Projects, SkillList } = await import('@sln/ui-shared')

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
      <div>
        <Hero />
        <SkillList />
        <Projects />
      </div>
    </Layout>
  )
}

export default About
