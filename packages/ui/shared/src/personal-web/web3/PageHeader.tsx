import { Col, Divider, Row, Text } from '@nextui-org/react'
import { BaseProps } from '../../types'

export default function PageHeader({ children }: BaseProps) {
  return (
    <>
      <Row
        css={{ marginBottom: '$5', width: '100%' }}
        justify='space-between'
        align='center'
      >
        <Col>
          <Text
            h3
            weight='bold'
            css={{
              textGradient: '90deg, $secondary, $primary 30%',
            }}
          >
            Oskar Hulter
          </Text>
        </Col>
        {children ? <Col css={{ flex: 1 }}>{children}</Col> : null}
      </Row>

      <Divider css={{ marginBottom: '$10' }} />
    </>
  )
}
