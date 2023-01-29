import { Button, Card, Col, Container, Text } from '@nextui-org/react'
import Image from 'next/image'
import Link from 'next/link'
import UserAvatar from '../atoms/badges/UserAvatar'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import { UiProviderProps } from '../providers/WebUiProvider'

export default function Layout({ children, fonts }: UiProviderProps) {
  return (
    <Container
      className={fonts}
      css={{
        backgroundColor: '$backgroundContrast',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '$screen',
        height: 'min(100vh, 100dvh)',
        borderRadius: '0',
        p: 0,
        m: 0,
      }}
    >
      <Card
        variant='bordered'
        borderWeight='light'
        css={{
          width: 'min(60em, 100%)',
          m: 0,
        }}
      >
        <Card.Header
          as='header'
          id='header'
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
          as='main'
          className={fonts}
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
          {children}
        </Card.Body>
        <Card.Footer
          css={{
            position: 'sticky',
            width: 'min(60em, 100%)',
            minHeight: '85px',
            bottom: 0,
            zIndex: 200,
            boxShadow: '0 -12px 8px #111111',
            backgroundColor: '#111111',
            m: 0,
          }}
        >
          <footer className='footer-container'>
            <div className='social-list'>
              <Col className='social-icon'>
                <Link
                  target='_blank'
                  href='mailto:oskarhulter@gmail.com'
                >
                  <Button
                    className='navLink'
                    color='gradient'
                    rounded
                    icon={
                      <Image
                        src='/icons/social/mail-round-fill.svg'
                        alt='mail icon'
                        fill
                        style={{
                          fill: '#54b9ff',
                          padding: 2,
                        }}
                      />
                    }
                    css={{
                      aspectRatio: 1,
                      minWidth: '3.5rem',
                      minHeight: '3.5rem',
                      marginInline: 'auto',
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
                    color='gradient'
                    rounded
                    css={{
                      aspectRatio: 1,
                      minWidth: '3.5rem',
                      minHeight: '3.5rem',
                      marginInline: 'auto',
                    }}
                    icon={
                      <Image
                        src='/icons/social/linkedin-round-big.svg'
                        alt='linkedin icon'
                        fill
                        style={{
                          fill: '#54b9ff',
                          padding: 2,
                        }}
                      />
                    }
                  />
                </Link>
              </Col>
              <Col className='social-icon'>
                <Link
                  target='_blank'
                  href='https://www.twitter.com/ohulter'
                >
                  <Button
                    className='navLink'
                    color='gradient'
                    rounded
                    css={{
                      aspectRatio: 1,
                      minWidth: '3.5rem',
                      minHeight: '3.5rem',
                      marginInline: 'auto',

                      backgroundColor: 'rgb(0,29,85)',
                    }}
                    icon={
                      <Image
                        src='/icons/social/twitter-round-fill-1.svg'
                        alt='twitter icon'
                        fill
                        style={{
                          fill: '#54b9ff',
                          padding: 2,
                        }}
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
                    color='gradient'
                    rounded
                    css={{
                      aspectRatio: 1,
                      minWidth: '3.5rem',
                      minHeight: '3.5rem',
                      marginInline: 'auto',
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
                    icon={
                      <Image
                        src='/icons/social/github-round-fill-1.svg'
                        alt='github icon'
                        fill
                        style={{
                          fill: '#54b9ff',
                          padding: 2,
                        }}
                      />
                    }
                  />
                </Link>
              </Col>
            </div>
            <div className='footer-copyright'>
              <Text color='$textLight'>©2023 - Oskar Hulter</Text>
            </div>
          </footer>
        </Card.Footer>
      </Card>
    </Container>
  )
}
