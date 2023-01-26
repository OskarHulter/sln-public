import { Card, Container } from '@nextui-org/react'
import Balancer from 'react-wrap-balancer'
import type { ProviderProps } from '../../types'
import RouteTransition from '../animations/RouteTransition'
import Navigation from './Navigation'
import PageHeader from './PageHeader'

export default function Layout({ children, initialized }: ProviderProps) {
  return (
    <Container
      display='flex'
      justify='center'
      alignItems='center'
      css={{
        backgroundColor: 'red',
      }}
    >
      <Card
        variant='bordered'
        borderWeight='light'
        css={{
          maxHeight: '100vh',
          justifyContent: initialized ? 'normal' : 'center',
          alignItems: initialized ? 'normal' : 'center',
          borderRadius: 0,
          paddingBottom: 5,
          '@xs': {
            borderRadius: '$lg',
            height: '95vh',
            maxWidth: '800px',
          },
        }}
      >
        <PageHeader />

        <Card.Body
          css={{
            display: 'block',
            paddingLeft: '20',
            paddingRight: 2,
            paddingBottom: '40px',
            '@xs': {
              padding: '$12',
              paddingBottom: '40px',
              overflow: 'scroll',
            },
          }}
        >
          <RouteTransition>
            <Balancer>{children}</Balancer>
          </RouteTransition>
        </Card.Body>
        <Card.Footer
          as='footer'
          css={{
            position: 'sticky',
            justifyContent: 'center',
            alignItems: 'stretch',
            boxShadow: '0 -25px 10px #111111',
            backgroundColor: '#111111',
            zIndex: 200,
            bottom: 0,
            left: 0,
            padding: '0 $10 0 $10',
          }}
        >
          <Navigation />
        </Card.Footer>
      </Card>
    </Container>
  )
}
