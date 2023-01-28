import { Button, Card, Col, Container } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import type { ProviderProps } from '../../types'
import UserAvatar from '../atoms/badges/UserAvatar'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'

export default function Layout({ children, initialized }: ProviderProps) {
  return (
    <Container
      css={{
        backgroundColor: '$backgroundContrast',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '$screen',
        height: 'min(100vh, 100dvh)',
        borderRadius: '0',
        p: 0,
      }}
    >
      <Card
        variant='bordered'
        borderWeight='light'
        css={{
          width: 'min(60em, 100%)',
        }}
      >
        <Card.Header
          as='header'
          className='header-wrapper'
          css={{
            backgroundColor: '$blue50',
            width: 'min(60em, 100%)',
            position: 'sticky',
            top: 0,
            zIndex: 200,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingInline: '$15',
            paddingTop: '$10',
            paddingBottom: '$10',
          }}
        >
          <UserAvatar />
          <ThemeSwitch />
        </Card.Header>
        <Card.Body
          css={{
            display: 'block',
            paddingLeft: '2',
            paddingRight: '2',
            paddingBottom: '40px',
            '@xs': {
              padding: '$12',
              paddingBottom: '40px',
              overflow: 'scroll',
            },
          }}
        >
          <main>{children}</main>
        </Card.Body>
        <Card.Footer
          className='footer-wrapper'
          css={{
            position: 'sticky',
            minWidth: 'min(60em, 100%)',
            bottom: 0,
            padding: 0,
            zIndex: 200,
          }}
        >
          <footer className='social-list'>
            <Col className='social-icon'>
              <Link
                target='_blank'
                href='mailto:oskarhulter@gmail.com'
              >
                <Button
                  className='navLink'
                  color='secondary'
                  flat
                  icon={
                    <Image
                      src='/icons/social/mail-round-fill.svg'
                      alt='mail icon'
                      fill
                    />
                  }
                  css={{
                    aspectRatio: 1,
                    minWidth: '3.5rem',
                    minHeight: '3.5rem',
                    borderRadius: '$squared',
                  }}
                />
              </Link>
            </Col>
            <Col className='social-icon'>
              <Link
                target='_blank'
                href='https://www.linkedin.com/in/oskar-hulter'
              >
                <Button
                  className='navLink'
                  color='secondary'
                  flat
                  css={{
                    aspectRatio: 1,
                    minWidth: '3.5rem',
                    minHeight: '3.5rem',
                    borderRadius: '$squared',
                  }}
                  icon={
                    <Image
                      src='/icons/social/linkedin-round-big.svg'
                      alt='linkedin icon'
                      fill
                    />
                  }
                />
              </Link>
            </Col>
            <Col
              css={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              className='social-icon'
            >
              <Link
                target='_blank'
                href='https://www.twitter.com/ohulter'
              >
                <Button
                  className='navLink'
                  color='secondary'
                  flat
                  css={{
                    aspectRatio: 1,
                    minWidth: '3.5rem',
                    minHeight: '3.5rem',
                    borderRadius: '$squared',
                    backgroundColor: 'rgb(0,29,85)',
                  }}
                  icon={
                    <Image
                      src='/icons/social/twitter-round-fill-2.svg'
                      alt='twitter icon'
                      fill
                    />
                  }
                />
              </Link>
            </Col>
            <Col className='social-icon'>
              <Link
                target='_blank'
                href='https://www.github.com/OskarHulter'
              >
                <Button
                  className='navLink'
                  color='secondary'
                  flat
                  css={{
                    aspectRatio: 1,
                    minWidth: '3.5rem',
                    minHeight: '3.5rem',
                    borderRadius: '$squared',
                  }}
                  icon={
                    <Image
                      src='/icons/social/github-round-fill-1.svg'
                      alt='github icon'
                      fill
                      style={{
                        fill: '#54b9ff',
                      }}
                    />
                  }
                />
              </Link>
            </Col>
          </footer>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export function SocialButton() {
  return (
    <Col>
      <Link
        target='_blank'
        href='mailto:oskarhulter@gmail.com'
      >
        <Button
          className='navLink'
          color='secondary'
          flat
          css={{
            aspectRatio: 1,
            minWidth: '3.5rem',
            minHeight: '3.5rem',
            borderRadius: '$squared',
          }}
          icon={
            <Image
              src='/icons/social/mail-round-fill.svg'
              alt='mail icon'
              fill
            />
          }
        />
      </Link>
    </Col>
  )
}
/*

  css={{
            minHeight: '85px',
            position: 'sticky',
            boxShadow: '0 -30px 20px #111111',
            backgroundColor: '#111111',
            zIndex: 200,
            bottom: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',

            m: '0 $4',
            '@xs': {
              padding: '0 $8 $1 $8',
            },
          }}

*/

/* <Link
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
      <Button
            as='a'
            href='https://www.linkedin.com/in/oskar-hulter'
            css={{
              p: '0',
              m: '0',
              width: 'auto',
              height: 'auto',
              boxShadow: '$md',
              '&:hover': {
                background: '$green100',
                color: '$green800',
              },
              '&:active': {
                background: '$green200',
              },
              '&:focus': {
                borderColor: '$green400',
              },
            }}
          >
          </Button>

      */
