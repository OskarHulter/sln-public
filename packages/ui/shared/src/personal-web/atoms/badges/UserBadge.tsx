import { Grid, User } from '@nextui-org/react'
//import UserTwitterCard from '../../cards/UserTwitterCard'
import { useContent } from '../../features/content/useContent'
import LoadingSpinner from '../LoadingSpinner'

export default function UserBadge() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />
  /*
  <Tooltip placement='top' content={<UserTwitterCard />}>
        </Tooltip>
  */
  return (
    <Grid>
      <User
        pointer
        size='400px'
        color='gradient'
        bordered
        src={data?.constants.urls.profilePicUrl}
        name='Fullstack Web Developer'
        description='JS, TS & React'
      />
    </Grid>
  )
}

export function UserAvatar() {
  return (
    <User
      src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
      name='Oskar Hulter'
      description='UI/UX Designer @Github'
    >
      <User.Link href='https://twitter.com/OskarHulter'>@OskarHulter</User.Link>
    </User>
  )
}
