import { Spacer } from '@nextui-org/react'
import { Hero, MailForm, useContent } from '@sln/ui'
import { NextSeo } from 'next-seo'

export default function Home() {
  const { data, status } = useContent()

  if (status === 'error') return <div>error</div>
  if (data)
    return (
      <>
        <NextSeo
          title='Oskar Hulter - Senior Full Stack JS, TS, react,  dev'
          description='This is the portfolio page of Oskar Hulter.'
          twitter={{
            handle: '@OHulter',
            site: '@oskarhulter.com',
            cardType: 'summary_large_image',
          }}
        />
        <Hero />

        <MailForm />

        <Spacer y={3} />
      </>
    )
}
// <Block {...data[11]} />
