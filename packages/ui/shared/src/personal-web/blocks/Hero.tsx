import { Button, Grid, Row, Text, Tooltip } from '@nextui-org/react'
import UserAvatar from '../atoms/badges/UserAvatar'
import LoadingSpinner from '../atoms/LoadingSpinner'
import useContent from '../features/content/useContent'
import UserTwitterCard from './UserTwitterCard'

export default function Hero() {
  const { data, status } = useContent()

  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <div>error!</div>
  if (status === 'success' && data)
    return (
      <Grid
        xs
        css={{ p: '$6', mw: '70ch' }}
      >
        <Row justify='space-between'>
          <Text
            h2
            size={'$8xl'}
            css={{
              lineHeight: '$xs',
              textGradient: `316deg, $primary 3%, $secondary 100%`,
              letterSpacing: '$tight',
              m: '$1',
            }}
          >
            Hi,
          </Text>
          <Tooltip
            placement='bottomStart'
            content={<UserTwitterCard />}
          >
            <UserAvatar />
          </Tooltip>
        </Row>
        <Row>
          <Text
            h2
            size={'$7xl'}
            weight='bold'
            css={{
              lineHeight: '$sm',
              textGradient: '45deg, $yellow600 -20%, $red600 100%',
              letterSpacing: '$tight',

              p: 0,
              m: 0,
            }}
          >
            {data[0].title + '.'}
          </Text>
        </Row>

        <Text
          size='$xl'
          color='$white'
          css={{
            letterSpacing: '$wide',
            lineHeight: '$base',
          }}
        >
          {data[0].text}
        </Text>
        <Row>
          <Button
            size='lg'
            auto
            color='primary'
            css={{ m: '$5', p: '$3', minWidth: '16ch' }}
          >
            <Text
              size='$xl'
              weight='bold'
              css={{
                letterSpacing: 'inherit',
              }}
              color='$white'
            >
              Contact
            </Text>
          </Button>
          <Button
            size='lg'
            auto
            color='primary'
            flat
            css={{ m: '$5', p: '$3', minWidth: '16ch' }}
          >
            <Text
              size='$xl'
              weight='bold'
              css={{
                letterSpacing: 'inherit',
              }}
              color='$white'
            >
              About
            </Text>
          </Button>
        </Row>
      </Grid>
    )
}
