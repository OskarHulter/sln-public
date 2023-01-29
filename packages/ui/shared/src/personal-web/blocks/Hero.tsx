import { Grid, Text } from '@nextui-org/react'
import LoadingSpinner from '../atoms/LoadingSpinner'
import Paragraph from '../atoms/Paragraph'
import useContent from '../features/content/useContent'

export default function Hero() {
  const { data, status } = useContent()

  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <div>error!</div>
  if (status === 'success' && data)
    return (
      <Grid.Container
        gap={1}
        css={{
          p: '0 $10 0 $10',
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
              fontSize: 'clamp(1rem, 2vw + 1rem, 4rem)',
              lineHeight: '$xs',
              textGradient: '45deg,  #00254D -20%, #54b9ff 100%',
              letterSpacing: '$tight',
              p: '$2 0 0 $9',
              m: '0',
              marginInline: 'auto',
            }}
          >
            {data[1].text}
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text
            h1
            weight='semibold'
            css={{
              lineHeight: '$xs',
              textGradient: `316deg, $primary 3%, $secondary 100%`,
              letterSpacing: '$tighter',
              m: '$1',
              fontSize: 'clamp(6rem, 2vw + 1rem, 18rem)',
              marginInline: 'auto',

              // '@smMax': {
              //   fontSize: '$8xl',
              // },
              // '@mdMax': {
              //   fontSize: '10rem',
              // },
              '@smMax': {
                fontSize: '4rem',
              },
              '@xsMax': {
                fontSize: '3rem',
              },
              p: '$2',
            }}
          >
            {data[0].title}
          </Text>
        </Grid>
        <Grid
          xs={12}
          css={{
            maxWidth: 'min(30ch, 90vw)',
          }}
        >
          <Paragraph>{data[0].text}</Paragraph>
        </Grid>
        <Grid
          xs={12}
          css={{
            maxWidth: 'min(30ch, 90vw)',
          }}
        >
          <Paragraph>{data[2].text}</Paragraph>
        </Grid>
      </Grid.Container>
    )
}

/* <Grid
          xs={12}
          alignContent='stretch'
          justify='space-evenly'
          direction='row'
        >
          <ActionButton
            as='a'
            href='#contact-form'
          >
            contact
          </ActionButton>
        </Grid> */
