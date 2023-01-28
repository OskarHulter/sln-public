import { Card, Loading, Spacer, Text, Tooltip } from '@nextui-org/react'
import type { ContentBlock } from '@sln/domain-shared'
import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import UserTwitterCard from './UserTwitterCard'

export default function Block(props: ContentBlock) {
  if (!props) return <Loading />

  return (
    <Card
      variant='flat'
      key={props.id}
    >
      <Card.Header id={props.id}>
        <Text>{props.title}</Text>
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
          }}
        >
          <Balancer>{props.text}</Balancer>
        </Text>
      </Card.Body>
      <Card.Footer>
        <Tooltip
          placement='bottomStart'
          content={<UserTwitterCard />}
        >
          <Text>Keep an eye on this space as I have a few plans up my sleeve.</Text>
        </Tooltip>
      </Card.Footer>
      <Spacer y={4} />
    </Card>
  )
}
