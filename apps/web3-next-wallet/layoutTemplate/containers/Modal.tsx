import { Modal as NextModal } from '@nextui-org/react'
import { useSnapshot } from 'valtio'
import ModalStore from '../../store/ModalStore'
import SessionProposalModal from '../../views/SessionProposalModal'
import SessionSendTransactionModal from '../../views/SessionSendTransactionModal'
import SessionSignPolkadotModal from '../../views/SessionSignPolkadotModal'
import SessionUnsuportedMethodModal from '../../views/SessionUnsuportedMethodModal'

export default function Modal() {
  const { open, view } = useSnapshot(ModalStore.state)

  return (
    <NextModal
      blur
      open={open}
      style={{ border: '1px solid rgba(139, 139, 139, 0.4)' }}
    >
      {view === 'SessionProposalModal' && <SessionProposalModal />}
      {view === 'SessionSendTransactionModal' && <SessionSendTransactionModal />}
      {view === 'SessionUnsuportedMethodModal' && <SessionUnsuportedMethodModal />}
      {view === 'SessionSignPolkadotModal' && <SessionSignPolkadotModal />}
    </NextModal>
  )
}
