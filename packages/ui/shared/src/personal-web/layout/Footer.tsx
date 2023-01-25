import { Link, Row, Text } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../atoms/icons/Icons'

export default function Footer() {
  return (
    <>
      <Row
        justify='center'
        fluid
        css={{
          bgBlur: '$backgroundAlpha',
          zIndex: 1,
          bg: '$backgroundAlpha',
          border: '$space$0 solid transparent',
          boxShadow: '$md',
        }}
      >
        <Text>©2023 - Oskar Hulter</Text>
      </Row>
      <Row
        justify='center'
        fluid
        css={{
          bgBlur: '$backgroundAlpha',
          zIndex: 1,
          bg: '$backgroundAlpha',
          border: '$space$0 solid transparent',
          boxShadow: '$md',
          gridArea: 'footer',
        }}
      >
        <>
          <Link
            block
            color='primary'
            href='https://github.com/oskarhulter'
            css={{ m: '$8' }}
          >
            <GithubIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='mailto:oskarhulter@gmail.com'
            css={{ m: '$8' }}
          >
            <MailIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='https://www.linkedin.com/in/oskar-hulter'
            css={{ m: '$8' }}
          >
            <LinkedinIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='https://www.twitter.com/ohulter'
            css={{ m: '$8' }}
          >
            <TwitterIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>
        </>
      </Row>
    </>
  )
}
