import { proxy } from 'valtio'

/**
 * Types
 */
interface ModalData {
  proposal?: unknown
  requestEvent?: unknown
  requestSession?: unknown
  request?: unknown
}

interface State {
  open: boolean
  view?:
    | 'SessionProposalModal'
    | 'SessionSignModal'
    | 'SessionSignTypedDataModal'
    | 'SessionSendTransactionModal'
    | 'SessionUnsuportedMethodModal'
    | 'SessionSignCosmosModal'
    | 'SessionSignSolanaModal'
    | 'SessionSignPolkadotModal'
    | 'SessionSignNearModal'
    | 'SessionSignElrondModal'
    | 'AuthRequestModal'
  data?: ModalData
}

/**
 * State
 */
const state = proxy<State>({
  open: false,
})

/**
 * Store / Actions
 */
const ModalStore = {
  state,

  open(view: State['view'], data: State['data']) {
    state.view = view
    state.data = data
    state.open = true
  },

  close() {
    state.open = false
  },
}

export default ModalStore
