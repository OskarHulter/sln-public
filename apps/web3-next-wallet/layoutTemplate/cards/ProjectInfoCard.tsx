import { Avatar, Col, Link, Row, Text } from '@nextui-org/react'

interface IProps {
  metadata?: {
    icons: string
    name: string
    url: string
  }
}

export default function ProjectInfoCard({ metadata }: Partial<IProps>) {
  const { icons, name, url } = metadata

  return (
    <Row align='center'>
      <Col span={3}>
        <Avatar src={icons[0]} />
      </Col>
      <Col span={14}>
        <Text h5>{name}</Text>
        <Link href={url}>{url}</Link>
      </Col>
    </Row>
  )
}
