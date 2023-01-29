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
            siteName: 'OskarHulterPersonal',
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

        <Spacer y={4} />
      </>
    )
}
// <Block {...data[11]} />
