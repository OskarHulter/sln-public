import { Button, Divider, Modal, Text } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import ProjectInfoCard from '../layoutTemplate/cards/ProjectInfoCard'
import SessionProposalChainCard from '../layoutTemplate/cards/SessionProposalChainCard'
import RequestModalContainer from '../layoutTemplate/containers/RequestModalContainer'
import ProposalSelectSection from '../newLayout/sections/ProposalSelectSection'
import ModalStore from '../store/ModalStore'
import {
  isCosmosChain,
  isEIP155Chain,
  isElrondChain,
  isNearChain,
  isPolkadotChain,
  isSolanaChain,
} from '../utils/HelperUtil'

export default function SessionProposalModal() {
  const [selectedAccounts, setSelectedAccounts] = useState<Record<string, string[]>>({})
  const hasSelected = Object.keys(selectedAccounts).length

  // Get proposal data and wallet address from store
  const proposal = ModalStore.state.data?.proposal

  // Ensure proposal is defined
  if (!proposal) {
    return <Text>Missing proposal data</Text>
  }
  const params = { proposer: 'string', requiredNamespaces: 'string' }
  // Get required proposal data
  //const { id, params } = proposal
  const { requiredNamespaces } = params

  // Add / remove address from EIP155 selection
  function onSelectAccount(chain: string, account: string) {
    if (selectedAccounts[chain]?.includes(account)) {
      const newSelectedAccounts = selectedAccounts[chain]?.filter((a) => a !== account)
      setSelectedAccounts((prev) => ({
        ...prev,
        [chain]: newSelectedAccounts,
      }))
    } else {
      const prevChainAddresses = selectedAccounts[chain] ?? []
      setSelectedAccounts((prev) => ({
        ...prev,
        [chain]: [...prevChainAddresses, account],
      }))
    }
  }

  // Hanlde approve action, construct session namespace
  async function onApprove() {
    ModalStore.close()
  }

  // Hanlde reject action
  async function onReject() {
    ModalStore.close()
  }

  // Render account selection checkboxes based on chain
  function renderAccountSelection(chain: string) {
    if (isEIP155Chain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['eip155Addresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    } else if (isCosmosChain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['cosmosAddresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    } else if (isSolanaChain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['solanaAddresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    } else if (isPolkadotChain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['polkadotAddresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    } else if (isNearChain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['nearAddresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    } else if (isElrondChain(chain)) {
      return (
        <ProposalSelectSection
          addresses={['elrondAddresses']}
          selectedAddresses={['selectedAccounts']}
          onSelect={onSelectAccount}
          chain={chain}
        />
      )
    }
  }

  return (
    <Fragment>
      <RequestModalContainer title='Session Proposal'>
        <ProjectInfoCard />

        {/* TODO(ilja) Relays selection */}

        <Divider y={2} />

        {Object.keys(requiredNamespaces).map((chain) => {
          return (
            <Fragment key={chain}>
              <Text
                h4
                css={{ marginBottom: '$5' }}
              >{`Review ${chain} permissions`}</Text>
              <SessionProposalChainCard />
              {renderAccountSelection(chain)}
              <Divider y={2} />
            </Fragment>
          )
        })}
      </RequestModalContainer>

      <Modal.Footer>
        <Button
          auto
          flat
          color='error'
          onClick={onReject}
        >
          Reject
        </Button>

        <Button
          auto
          flat
          color='success'
          onClick={onApprove}
          disabled={!hasSelected}
          css={{ opacity: hasSelected ? 1 : 0.4 }}
        >
          Approve
        </Button>
      </Modal.Footer>
    </Fragment>
  )
}
