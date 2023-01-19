
import { Button, Col, Grid, Row, Text } from '@nextui-org/react'
import AvatarBadge from '../atoms/badges/AvatarBadge.js'


export function Hero() {
  return (
    <Grid xs>
      <Row css={{ m: '$10' }}>
        <Col css={{ p: '$6', mw: '55ch' }}>
          <Text
            h2
            size={60}
            css={{
              lineHeight: '$sm',
              textGradient: `316deg, $primary 3%, $secondary 100%`,
            }}
          >
            {`Hi, I’m Oskar`}
          </Text>
          <Text>
            {`I am the #1 NY Times Bestselling author of The Subtle Art of Not Giving a F*ck and Everything Is F*cked: A Book About Hope. I write life advice that is science-based, pragmatic, and non-bullshitty—a.k.a., life advice that doesn’t suck. Some people say I’m an idiot. Other people say I saved their life. Read on and decide for yourself.`}
          </Text>

          <Row>
            <Button rounded size='lg' auto color='gradient' css={{ m: '$5', height: 'fit-content' }}>
              <Text
                color='$blue900'
                size='$xl'
                css={{
                  lineHeight: '$3xl',
                  letterSpacing: '$wide',
                }}
              >
                Contact
              </Text>
            </Button>

          </Row>
        </Col>
        <Col css={{ p: '$6' }}>
          <AvatarBadge />
        </Col>
      </Row>
    </Grid>
  )
}

export default Hero
