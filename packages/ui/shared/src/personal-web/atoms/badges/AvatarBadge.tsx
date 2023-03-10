import { Avatar, Grid } from '@nextui-org/react'
import Image from 'next/image'

export default function AvatarBadge() {
  // const { data, status } = useContent()

  // if (status === 'loading') return <LoadingSpinner />
  // if (status === 'error') return <div>error</div>
  // if (status === 'success')
  return (
    <Grid>
      <Avatar
        pointer
        size='lg'
        color='gradient'
        bordered
        squared
        icon={
          <Image
            alt='Profile picture of Oskar Hulter'
            src='/images/profile-pic.webp'
            fill
            priority
          />
        }
      />
    </Grid>
  )
}

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
