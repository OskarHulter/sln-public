import { Card, Container, Text } from '@nextui-org/react'
import UserAvatar from '../atoms/badges/UserAvatar'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import { UiProviderProps } from '../providers/WebUiProvider'
import { Socials } from './Socials'

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

            m: 0,
            p: '0 0 $4 0',
          }}
        >
          <footer className='footer-container'>
            <Socials />
            <div className='footer-copyright'>
              <Text
                color='$blue500'
                weight={'thin'}
              >
                ©2023 - Oskar Hulter
              </Text>
            </div>
          </footer>
        </Card.Footer>
      </Card>
    </Container>
  )
}
