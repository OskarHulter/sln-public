import { Container, Spacer } from '@nextui-org/react'
//import * as ui from '@sln/ui-shared'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { NextPage } from 'next'
import { InferGetStaticPropsType } from 'next/types'
import React from 'react'
import trpc from '../utils/trpc'

const { fetchContent } = await import('@sln/data-access-shared')
const { Hero, JobList, Layout, MailForm, Projects, SkillList } = await import('@sln/ui-shared')

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
  const hello = trpc.hello.useQuery({ text: 'client' })
  if (!hello.data) {
    return <div>Loading...</div>
  }
  return (
    <Layout>
      <Container
        justify='center'
        css={{ width: 'full' }}
        as='main'
      >
        {hello.data.greeting}
        <Hero />
        <Spacer y={2} />
        <Spacer y={2} />
        <SkillList />
        <Spacer y={2} />
        <JobList />
        <Spacer y={2} />
        <Projects />
        <Spacer y={2} />
        <MailForm />
      </Container>
    </Layout>
  )
}

export default Home
