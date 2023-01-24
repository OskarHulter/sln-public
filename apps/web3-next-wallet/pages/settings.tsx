import { Divider, Row, Switch, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import { useSnapshot } from 'valtio'
import RelayRegionPicker from '../layoutTemplate/atoms/RelayRegionPicker'
import PageHeader from '../newLayout/PageHeader'
import SettingsStore from '../store/SettingsStore'

export default function SettingsPage() {
  const { testNets } = useSnapshot(SettingsStore.state)

  return (
    <Fragment>
      <PageHeader title='Settings' />

      <Text
        h4
        css={{ marginBottom: '$5' }}
      >
        Packages
      </Text>
      <Row
        justify='space-between'
        align='center'
      >
        <Text color='$gray400'>@walletconnect/web3wallet</Text>
        <Text color='$gray400'>{'@walletconnect/web3wallet'}</Text>
      </Row>
      <Row
        justify='space-between'
        align='center'
      >
        <Text color='$gray400'>@walletconnect/utils</Text>
        <Text color='$gray400'>{'@walletconnect/utils'}</Text>
      </Row>
      <Row
        justify='space-between'
        align='center'
      >
        <Text color='$gray400'>@walletconnect/types</Text>
        <Text color='$gray400'>{'@walletconnect/types'}</Text>
      </Row>

      <Divider y={2} />

      <Text
        h4
        css={{ marginBottom: '$5' }}
      >
        Testnets
      </Text>
      <Row
        justify='space-between'
        align='center'
      >
        <Switch
          checked={testNets}
          onChange={SettingsStore.toggleTestNets}
        />
        <Text>{testNets ? 'Enabled' : 'Disabled'}</Text>
      </Row>

      <Divider y={2} />

      <Row
        justify='space-between'
        align='center'
      >
        <Text
          h4
          css={{ marginBottom: '$5' }}
        >
          Relayer Region
        </Text>
        <RelayRegionPicker />
      </Row>

      <Divider y={2} />

      <Text css={{ color: '$yellow500', marginBottom: '$5', textAlign: 'left', padding: 0 }}>
        Warning: mnemonics and secret keys are provided for development purposes only and should not
        be used elsewhere!
      </Text>
    </Fragment>
  )
}
