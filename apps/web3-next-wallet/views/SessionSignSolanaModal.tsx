import { Button, Divider, Modal, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import ProjectInfoCard from '../layoutTemplate/cards/ProjectInfoCard'
import RequestDataCard from '../layoutTemplate/cards/RequestDataCard'
import RequesDetailsCard from '../layoutTemplate/cards/RequestDetalilsCard'
import RequestMethodCard from '../layoutTemplate/cards/RequestMethodCard'
import RequestModalContainer from '../layoutTemplate/containers/RequestModalContainer'
import ModalStore from '../store/ModalStore'
import { approveSolanaRequest, rejectSolanaRequest } from '../utils/SolanaRequestHandlerUtil'
import { web3wallet } from '../utils/WalletConnectUtil'

export default function SessionSignSolanaModal() {
  // Get request and wallet data from store
  const requestEvent = ModalStore.state.data?.requestEvent
  const requestSession = ModalStore.state.data?.requestSession

  // Ensure request and wallet are defined
  if (!requestEvent || !requestSession) {
    return <Text>Missing request data</Text>
  }

  // Get required request data
  const { topic, params } = requestEvent
  const { request, chainId } = params

  // Handle approve action (logic varies based on request method)
  async function onApprove() {
    if (requestEvent) {
      const response = await approveSolanaRequest(requestEvent)
      await web3wallet.respondSessionRequest({
        topic,
        response
      })
      ModalStore.close()
    }
  }

  // Handle reject action
  async function onReject() {
    if (requestEvent) {
      const response = rejectSolanaRequest(requestEvent)
      await web3wallet.respondSessionRequest({
        topic,
        response
      })
      ModalStore.close()
    }
  }

  return (
    <Fragment>
      <RequestModalContainer title="Sign Message">
        <ProjectInfoCard metadata={requestSession.peer.metadata} />

        <Divider y={2} />

        <RequesDetailsCard chains={[chainId ?? '']} protocol={requestSession.relay.protocol} />

        <Divider y={2} />

        <RequestDataCard data={params} />

        <Divider y={2} />

        <RequestMethodCard methods={[request.method]} />
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={onReject}>
          Reject
        </Button>
        <Button auto flat color="success" onClick={onApprove}>
          Approve
        </Button>
      </Modal.Footer>
    </Fragment>
  )
}