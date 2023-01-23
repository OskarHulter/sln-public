import { Card, Grid, Link, Row, Text } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../atoms/icons/Icons'
import LoadingSpinner from '../atoms/LoadingSpinner'
import { useContent } from '../features/content/useContent'

const MockItem = ({ text }: { text: string }) => {
  return (
    <Card css={{ h: '$20', $$cardColor: '$colors$primary', p: 0 }}>
      <Card.Body css={{ p: '$md' }}>
        <Text
          size={20}
          color='white'
          css={{ m: 0, p: 0 }}
        >
          {text}
        </Text>
      </Card.Body>
    </Card>
  )
}
export function Footer() {
  const { data } = useContent()

  if (!data) {
    return <LoadingSpinner />
  }
  return (
    <>
      <Row
        justify='center'
        fluid
        css={{
          bgBlur: '$backgroundAlpha',
          zIndex: 1,
          bg: '$backgroundAlpha',
          border: '$space$0 solid transparent',
          boxShadow: '$md',
        }}
      >
        <Text>{`made by ${data.constants.creatorName}`}</Text>
      </Row>
      <Row
        justify='center'
        fluid
        css={{
          bgBlur: '$backgroundAlpha',
          zIndex: 1,
          width: '$full',
          bg: '$backgroundAlpha',
          border: '$space$0 solid transparent',
          boxShadow: '$md',
        }}
      >
        <>
          <Link
            block
            color='primary'
            href='https://github.com/oskarhulter'
            css={{ m: '$8' }}
          >
            <GithubIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='mailto:oskarhulter@gmail.com'
            css={{ m: '$8' }}
          >
            <MailIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='https://www.linkedin.com/in/oskar-hulter'
            css={{ m: '$8' }}
          >
            <LinkedinIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>

          <Link
            block
            color='primary'
            href='https://www.twitter.com/ohulter'
            css={{ m: '$8' }}
          >
            <TwitterIcon
              fill='currentColor'
              size={'3em'}
            />
          </Link>
        </>
      </Row>
      <Grid.Container
        as='footer'
        justify='center'
        css={{
          bgBlur: '$backgroundAlpha',
          zIndex: 1,
          width: '$full',
          bg: '$backgroundAlpha',
          border: '$space$0 solid transparent',
          boxShadow: '$md',
          p: 0,
        }}
      >
        {data.technologies.techNames?.map((text: string, key: number) => (
          <Grid
            xs
            key={key}
            css={{ p: 0 }}
          >
            <MockItem text={text} />
          </Grid>
        ))}
      </Grid.Container>
    </>
  )
}
