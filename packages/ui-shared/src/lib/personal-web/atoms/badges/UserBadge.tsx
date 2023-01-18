import { Grid, Tooltip, User } from '@nextui-org/react'
import { LoadingSpinner } from '../../atoms/LoadingSpinner'
import UserTwitterCard from '../../cards/UserTwitterCard'
import { useContent } from '../../hooks/useContent'


export function UserBadge() {

  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid>
      <Tooltip placement='top' content={<UserTwitterCard />}>
        <User
          pointer
          size='400px'
          color='gradient'
          bordered
          src={data?.constants.urls.profilePicUrl}
          name='Fullstack Web Developer'
          description='JS, TS & React'
        />
      </Tooltip>
    </Grid>
  )
}

export default UserBadge

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
