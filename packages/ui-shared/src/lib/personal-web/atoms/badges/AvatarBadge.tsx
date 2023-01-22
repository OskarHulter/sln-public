import { Avatar, Grid } from '@nextui-org/react'
import LoadingSpinner from '../../atoms/LoadingSpinner.js'
import { useContent } from '../../features/content/useContent.js'

export function AvatarBadge() {
  const { data } = useContent()

  if (!data) return <LoadingSpinner />

  return (
    <Grid>
      <Avatar
        pointer
        size='lg'
        src={data?.constants.urls.profilePicUrl}
        color='gradient'
        bordered
        squared
      />
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
