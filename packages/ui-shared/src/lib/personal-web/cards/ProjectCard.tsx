//'use client'
import { Card, Grid, Image, Link, Row, Text } from '@nextui-org/react'
import type { Project } from '@sln/domain-shared'

export function ProjectCard({
  name,
  description,
  image,
  siteUrl,
  githubUrl,
  technologies,
}: Project) {
  return (
    <Card
      isPressable
      isHoverable
      css={{ p: '$6', mw: '400px' }}
    >
      <Card.Header>
        <Image {...image} />
        <Grid.Container css={{ pl: '$6' }}>
          <Grid xs={12}>
            <Text
              h4
              css={{ lineHeight: '$xs' }}
            >
              {name}
            </Text>
          </Grid>
          <Grid xs={12}>
            <Text css={{ color: '$accents8' }}>{siteUrl}</Text>
          </Grid>
        </Grid.Container>
      </Card.Header>
      <Card.Body css={{ py: '$2' }}>
        <Text>{description}</Text>
        <Row>
          {technologies?.map((item, key) => (
            <Text key={key}>{item}</Text>
          ))}
        </Row>
      </Card.Body>
      <Card.Footer>
        <Link
          color='primary'
          target='_blank'
          href={githubUrl}
        >
          Visit source code on GitHub.
        </Link>
      </Card.Footer>
    </Card>
  )
}

export default ProjectCard
