import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Grid, Spacer, Text } from '@nextui-org/react'
import Balancer from 'react-wrap-balancer'
import { ActionButton } from '../atoms/buttons/ActionButton'
import LoadingSpinner from '../atoms/LoadingSpinner'
import useContent from '../features/content/useContent'

export default function Hero() {
  const { data, status } = useContent()
  const [parent] = useAutoAnimate()

  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <div>error!</div>
  if (status === 'success' && data)
    return (
      <Grid.Container
        gap={1}
        css={{
          p: '0 $20 0 $20',
          m: '0',
        }}
      >
        <Grid
          xs={12}
          css={{
            p: '0',
            m: '0',
          }}
        >
          <Text
            h2
            weight='thin'
            css={{
              fontSize: 'clamp(2rem, 5vw, 5rem)',
              lineHeight: '$xs',
              textGradient: '45deg,  #00254D -20%, #54b9ff 100%',
              letterSpacing: '$tight',
              paddingLeft: '$10',
              m: '0',
            }}
          >
            Hi, my name is
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text
            h1
            weight='bold'
            css={{
              lineHeight: '$xs',
              textGradient: `316deg, $primary 3%, $secondary 100%`,
              letterSpacing: '$tighter',
              m: '$1',
              fontSize: 'clamp(5rem, 5vw, 32rem)',
              // '@smMax': {
              //   fontSize: '$8xl',
              // },
              // '@mdMax': {
              //   fontSize: '10rem',
              // },
              '@xlMin': {
                fontSize: '$9xl',
              },
              p: '$2',
            }}
          >
            {data[0].title}
          </Text>
        </Grid>
        <Grid
          xs={12}
          justify='center'
          css={{
            maxWidth: '65ch',
          }}
        >
          <Balancer>
            <Text
              size='$2xl'
              color='$white'
              css={{
                letterSpacing: '$wide',
                lineHeight: '$base',
                fontWeight: '$thin',
              }}
            >
              {data[0].text}
            </Text>
          </Balancer>
          <Spacer y={4} />
        </Grid>
        <Grid
          xs={12}
          alignContent='stretch'
          justify='space-evenly'
          direction='row'
        >
          <ActionButton>contact</ActionButton>
        </Grid>
      </Grid.Container>
    )
}
