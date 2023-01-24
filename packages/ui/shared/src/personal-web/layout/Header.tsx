import { Navbar, Tooltip } from '@nextui-org/react'
import UserAvatar from '../atoms/badges/UserAvatar'
import ThemeSwitch from '../atoms/buttons/ThemeSwitch'
import UserTwitterCard from '../blocks/UserTwitterCard'

export default function Header() {
  return (
    <Navbar
      variant='sticky'
      css={{
        width: '$full',
        color: '$foreground',
        backgroundColor: '$gradient',
      }}
    >
      <Navbar.Brand>
        <Tooltip
          placement='left'
          content={<UserTwitterCard />}
        >
          <UserAvatar />
        </Tooltip>
      </Navbar.Brand>

      <Navbar.Content>
        <Navbar.Item>
          <ThemeSwitch />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  )
}
