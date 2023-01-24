import { Button, Divider, Modal, Text } from '@nextui-org/react'
import { Fragment } from 'react'
import ProjectInfoCard from '../layoutTemplate/cards/ProjectInfoCard'
import RequesDetailsCard from '../layoutTemplate/cards/RequestDetalilsCard'
import RequestMethodCard from '../layoutTemplate/cards/RequestMethodCard'
import RequestModalContainer from '../layoutTemplate/containers/RequestModalContainer'
import ModalStore from '../store/ModalStore'

export default function SessionUnsuportedMethodModal() {
  // Get request and wallet data from store
  const requestEvent = ModalStore.state.data?.requestEvent
  const requestSession = ModalStore.state.data?.requestSession

  // Ensure request and wallet are defined
  if (!requestEvent || !requestSession) {
    return <Text>Missing request data</Text>
  }

  // Get required request data

  return (
    <Fragment>
      <RequestModalContainer title="Unsuported Method">
        <ProjectInfoCard />

        <Divider y={2} />

        <RequesDetailsCard chains={['']} protocol={''} />

        <Divider y={2} />

        <RequestMethodCard methods={[]} />
      </RequestModalContainer>

      <Modal.Footer>
        <Button auto flat color="error" onClick={ModalStore.close}>
          Close
        </Button>
      </Modal.Footer>
    </Fragment>
  )
}
