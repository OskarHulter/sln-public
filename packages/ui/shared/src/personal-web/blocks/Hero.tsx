import { Button, Col, Grid, Row, Text, Tooltip } from '@nextui-org/react'
import { useContentQuery } from '@sln/data-access-shared'
import { default as UserBadge } from '../atoms/badges/UserBadge'
import LoadingSpinner from '../atoms/LoadingSpinner'
import { default as UserTwitterCard } from './UserTwitterCard'

export default function Hero() {
  const res = useContentQuery('Hero')

  if (res.isLoading) return <LoadingSpinner />
  if (res.isError) return <div>error!</div>
  if (res.data)
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
              {res.data.title}
            </Text>
            <Text>{res.data.text}</Text>

            <Row>
              <Button
                rounded
                size='lg'
                auto
                color='gradient'
                css={{ m: '$5', height: 'fit-content' }}
              >
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
            <Tooltip
              placement='top'
              content={<UserTwitterCard />}
            >
              <UserBadge />
            </Tooltip>
          </Col>
        </Row>
      </Grid>
    )
}
