import { Link, Row, Text } from '@nextui-org/react'
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from '../atoms/icons/Icons'
import LoadingSpinner from '../atoms/LoadingSpinner'
import { useContent } from '../features/content/useContent'

export default function Footer() {
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
    </>
  )
}
