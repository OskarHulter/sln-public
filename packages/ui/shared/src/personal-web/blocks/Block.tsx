import { Card, Loading, Spacer, Text } from '@nextui-org/react'
import type { ContentBlock } from '@sln/domain-shared'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

export default function Block(props: ContentBlock) {
  if (!props) return <Loading />

  return (
    <Card
      variant='flat'
      key={props.id}
    >
      <Card.Header id={props.id}>
        <Text css={{ margin: 'auto' }}>{props.title}</Text>
      </Card.Header>
      <Card.Body>
        {props.image ? (
          <Image
            key={props.image.key}
            src={props.image.src}
            alt={props.image.alt}
            width={props.image.width}
            height={props.image.height}
          />
        ) : null}
        <Text
          size='$2xl'
          color='$white'
          css={{
            letterSpacing: '$wide',
            lineHeight: '$base',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            maxWidth: '50ch',
            minWidth: 'min(40ch, 70vw)',
            margin: 'auto',
          }}
        >
          <Balancer>{props.text}</Balancer>
        </Text>
      </Card.Body>
      <Spacer y={4} />
    </Card>
  )
}
