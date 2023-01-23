import { Navbar, Text } from '@nextui-org/react'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import LoadingSpinner from '../atoms/LoadingSpinner'
import { useContent } from '../features/content/useContent'

export default function Header() {
  const { data } = useContent()
  if (!data) return <LoadingSpinner />
  return (
    <Navbar
      variant='sticky'
      css={{
        width: '$full',
      }}
    >
      <Navbar.Brand>
        <Text
          h1
          transform='uppercase'
          weight='bold'
          size='$xl'
          css={{
            m: '0',
          }}
        >
          {data?.constants.creatorName}
        </Text>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitch />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
