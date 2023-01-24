import { Col, Row, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { COSMOS_MAINNET_CHAINS } from '../../data/COSMOSData'
import { EIP155_MAINNET_CHAINS, EIP155_TEST_CHAINS } from '../../data/EIP155Data'
import { ELROND_MAINNET_CHAINS, ELROND_TEST_CHAINS } from '../../data/ElrondData'
import { NEAR_TEST_CHAINS } from '../../data/NEARData'
import { SOLANA_MAINNET_CHAINS, SOLANA_TEST_CHAINS } from '../../data/SolanaData'
import { formatChainName } from '../../utils/HelperUtil'
import ChainCard from './ChainCard'

/**
 * Utilities
 */
const CHAIN_METADATA = {
  ...COSMOS_MAINNET_CHAINS,
  ...SOLANA_MAINNET_CHAINS,
  ...ELROND_MAINNET_CHAINS,
  ...EIP155_MAINNET_CHAINS,
  ...EIP155_TEST_CHAINS,
  ...SOLANA_TEST_CHAINS,
  ...NEAR_TEST_CHAINS,
  ...ELROND_TEST_CHAINS
}

export default function SessionProposalChainCard() {
  return (
    <Fragment>

      return (
      <ChainCard key={'chainId'} rgb={''} flexDirection="col" alignItems="flex-start">
        <Text h5 css={{ marginBottom: '$5' }}>
          {formatChainName('chainId')}
        </Text>
        <Row>
          <Col>
            <Text h6>Methods</Text>
            <Text color="$gray300">hej</Text>
          </Col>
        </Row>
        <Row css={{ marginTop: '$5' }}>
          <Col>
            <Text h6>Events</Text>
            <Text color="$gray300">hej</Text>
          </Col>
        </Row>
      </ChainCard>
      )
    </Fragment>
  )
}
