import { Col, Link, Row } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../atoms/icons/Icons'

export default function Navigation() {
  return (
    <Row
      justify='space-evenly'
      align='center'
      css={{
        zIndex: 1,
        boxShadow: '$md',
        m: '0 $4',
        '@xs': {
          padding: '0 $8 $1 $8',
        },
      }}
    >
      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='https://github.com/oskarhulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <GithubIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='mailto:oskarhulter@gmail.com'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <MailIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content' }}>
        <Link
          block
          color='primary'
          href='https://www.linkedin.com/in/oskar-hulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <LinkedinIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>

      <Col css={{ width: 'fit-content', height: 'auto' }}>
        <Link
          block
          color='primary'
          href='https://www.twitter.com/ohulter'
          css={{
            p: '0',
            m: '0',
          }}
        >
          <TwitterIcon
            fill='currentColor'
            size={'3.5em'}
          />
        </Link>
      </Col>
    </Row>
  )
}
