import { Container, Spacer } from '@nextui-org/react'
import { fetchContent } from '@sln/data-access-shared'
import { Hero, JobList, Layout, MailForm, Projects, SkillList } from '@sln/ui-shared'
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
const Home: NextPage = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Container
        justify='center'
        css={{ width: 'full' }}
        as='main'
      >
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
