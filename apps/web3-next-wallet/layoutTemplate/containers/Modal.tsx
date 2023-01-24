
import { Modal as NextModal } from '@nextui-org/react'
import { useSnapshot } from 'valtio'
import ModalStore from '../../store/ModalStore'
import AuthRequestModal from '../../views/AuthRequestModal'
import SessionProposalModal from '../../views/SessionProposalModal'
import SessionSendTransactionModal from '../../views/SessionSendTransactionModal'
import SessionSignCosmosModal from '../../views/SessionSignCosmosModal'
import SessionSignElrondModal from '../../views/SessionSignElrondModal'
import SessionSignNearModal from '../../views/SessionSignNearModal'
import SessionSignPolkadotModal from '../../views/SessionSignPolkadotModal'
import SessionSignSolanaModal from '../../views/SessionSignSolanaModal'
import SessionSignTypedDataModal from '../../views/SessionSignTypedDataModal'
import SessionUnsuportedMethodModal from '../../views/SessionUnsuportedMethodModal'

export default function Modal() {
  const { open, view } = useSnapshot(ModalStore.state)

  return (
    <NextModal blur open={open} style={{ border: '1px solid rgba(139, 139, 139, 0.4)' }}>
      {view === 'SessionProposalModal' && <SessionProposalModal />}
      {view === 'SessionSignTypedDataModal' && <SessionSignTypedDataModal />}
      {view === 'SessionSendTransactionModal' && <SessionSendTransactionModal />}
      {view === 'SessionUnsuportedMethodModal' && <SessionUnsuportedMethodModal />}
      {view === 'SessionSignCosmosModal' && <SessionSignCosmosModal />}
      {view === 'SessionSignSolanaModal' && <SessionSignSolanaModal />}
      {view === 'SessionSignPolkadotModal' && <SessionSignPolkadotModal />}
      {view === 'SessionSignNearModal' && <SessionSignNearModal />}
      {view === 'SessionSignElrondModal' && <SessionSignElrondModal />}
      {view === 'AuthRequestModal' && <AuthRequestModal />}
    </NextModal>
  )
}
