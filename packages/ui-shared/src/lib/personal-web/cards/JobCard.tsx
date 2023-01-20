//'use client'
import { Card, Grid, Link, Row, Text } from '@nextui-org/react'
import { Job } from '@sln/content-shared'
import Image from 'next/image'

export function JobCard(props: Job) {
  return (
    <Card css={{ p: '$6', mw: '400px' }}>
      <Card.Header>
        <Image {...props.image} />
        <Grid.Container css={{ pl: '$6' }}>
          <Grid xs={12}>
            <Text
              h4
              css={{ lineHeight: '$xs' }}
            >
              {props.name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: '$accents8' }}>{props.name}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Text>{props.description}</Text>

        <Row>
          {props.technologies?.map((item, key) => (
            <Text key={key}>{item}</Text>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer>
        <Link
          color='primary'
          target='_blank'
          href={props.siteUrl}
        >
          External Link
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default JobCard
