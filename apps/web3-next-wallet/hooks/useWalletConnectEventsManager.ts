
import { useCallback, useEffect } from 'react'
import ModalStore from '../store/ModalStore'

export default function useWalletConnectEventsManager(initialized: boolean) {
  /******************************************************************************
   * 1. Open session proposal modal for confirmation / rejection
   *****************************************************************************/
  const onSessionProposal = useCallback(proposal => { ModalStore.open('SessionProposalModal', { proposal }) }, [])

  const onAuthRequest = useCallback((request) => {
    ModalStore.open('AuthRequestModal', { request })
  }, [])

  /******************************************************************************
   * 3. Open request handling modal based on method that was used
   *****************************************************************************/


  /******************************************************************************
   * Set up WalletConnect event listeners
   *****************************************************************************/
  useEffect(() => {
    if (initialized) {

      // TODOs
      // signClient.on('session_ping', data => console.log('ping', data))
      // signClient.on('session_event', data => console.log('event', data))
      // signClient.on('session_update', data => console.log('update', data))
      // signClient.on('session_delete', data => console.log('delete', data))
    }
  }, [initialized, onSessionProposal, onAuthRequest])
}
