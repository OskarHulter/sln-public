import { User } from '@nextui-org/react'
import useContent from '../../features/content/useContent'
import LoadingSpinner from '../LoadingSpinner'

export default function UserAvatar() {
  const { data, status } = useContent()

  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <div>error</div>
  return (
    <User
      pointer
      color='gradient'
      bordered
      src={data[0].image?.src}
      altText={data[0].image?.alt}
      name='Oskar Hulter'
      text='Oskar Hulter'
      description='Full Stack JS Dev'
      size='xl'
      css={{ p: '$2', m: '$4' }}
    >
      <User.Link href='https://twitter.com/OskarHulter'>@OskarHulter</User.Link>
    </User>
  )
}
