import { Col, Row, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { formatChainName } from '../../utils/HelperUtil'
import ChainCard from './ChainCard'

export default function SessionChainCard() {
  return (
    <Fragment>
      return (
      <ChainCard
        key={'chainId'}
        rgb={''}
        flexDirection='col'
        alignItems='flex-start'
      >
        <Text
          h5
          css={{ marginBottom: '$5' }}
        >
          {formatChainName('chainId')}
        </Text>
        <Row>
          <Col>
            <Text h6>Methods</Text>
            <Text color='$gray300'>hej</Text>
          </Col>
        </Row>
        <Row css={{ marginTop: '$5' }}>
          <Col>
            <Text h6>Events</Text>
            <Text color='$gray300'>hej</Text>
          </Col>
        </Row>
      </ChainCard>
      )
    </Fragment>
  )
}
