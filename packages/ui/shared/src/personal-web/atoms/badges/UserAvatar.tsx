import { User } from '@nextui-org/react'
import { default as NextLink } from 'next/link'
import useContent from '../../features/content/useContent'
import LoadingSpinner from '../LoadingSpinner'

export default function UserAvatar() {
  const { data, status } = useContent()

  if (status === 'loading') return <LoadingSpinner />
  if (status === 'error') return <div>error</div>
  return data ? (
    <NextLink href='/'>
      <User
        pointer
        color='gradient'
        bordered
        src={data[0].image?.src}
        altText={data[0].image?.alt}
        name='Oskar Hulter'
        size='xl'
        css={{ p: '$2', leftMargin: '$10' }}
      />
    </NextLink>
  ) : null
}
