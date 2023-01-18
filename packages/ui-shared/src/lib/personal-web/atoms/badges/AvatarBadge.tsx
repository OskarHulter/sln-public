import { Avatar, Grid, Tooltip } from '@nextui-org/react'
import { LoadingSpinner } from '../../atoms/LoadingSpinner'
import UserTwitterCard from '../../cards/UserTwitterCard'
import { useContent } from '../../hooks/useContent'


export function AvatarBadge() {

  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid>
      <Tooltip placement='top' content={<UserTwitterCard />}>
        <Avatar
          pointer
          size='lg'
          src={data?.constants.urls.profilePicUrl}
          color='gradient'
          bordered
          squared
        />
      </Tooltip>
    </Grid>
  )
}

export default AvatarBadge

// export default function Avatar() {
//   return (
//     <User
//       src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
//       name='Oskar Hulter'
//       description='UI/UX Designer @Github'
//     >
//       <User.Link href='https://twitter.com/OskarHulter'>@OskarHulter</User.Link>
//     </User>
//   )
// }