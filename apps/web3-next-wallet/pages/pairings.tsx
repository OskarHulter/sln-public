import { Text } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import PairingCard from '../layoutTemplate/cards/PairingCard'
import PageHeader from '../newLayout/PageHeader'

export default function PairingsPage() {
  const [pairings, setPairings] = useState([])

  return (
    <Fragment>
      <PageHeader title="Pairings" />
      {pairings.length ? (
        pairings.map(pairing => {
          const { peerMetadata } = pairing

          return (
            <PairingCard
              key={pairing.topic}
              logo={peerMetadata?.icons[0]}
              url={peerMetadata?.url}
              name={peerMetadata?.name}
            />
          )
        })
      ) : (
        <Text css={{ opacity: '0.5', textAlign: 'center', marginTop: '$20' }}>No pairings</Text>
      )}
    </Fragment>
  )
}
