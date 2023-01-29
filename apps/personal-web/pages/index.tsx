import { Spacer, Text } from '@nextui-org/react'
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
        <Text
          h2
          size='$4xl'
          css={{
            fontWeight: '$normal',
            letterSpacing: '$tighter',
            marginInline: 'auto',
            textAlign: 'center',
            marginBottom: '0',
          }}
        >
          Contact
        </Text>
        <MailForm />

        <Spacer y={4} />
      </>
    )
}
// <Block {...data[11]} />
