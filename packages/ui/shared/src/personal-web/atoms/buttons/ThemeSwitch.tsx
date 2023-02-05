import { Container, Switch, Tooltip } from '@nextui-org/react'
import Image from 'next/image'

export default function ThemeSwitch() {
  return (
    <Container css={{ width: 'fit-content', m: 0, p: 0 }}>
      <Tooltip
        content={'coming soon 😎'}
        placement='left'
      >
        <Switch
          color='secondary'
          disabled
          bordered
          checked={false}
          size='xl'
          css={{ minWidth: 'auto' }}
          iconOn={
            <Image
              src='/icons/sun-ray.svg'
              alt='activate light theme'
              width={40}
              height={40}
            />
          }
          iconOff={
            <Image
              src='/icons/moon.svg'
              alt='activate dark theme'
              width={40}
              height={40}
            />
          }
        />
      </Tooltip>
    </Container>
  )
}

// import { useTheme as useNextTheme } from 'next-themes'
// import { useHasMounted } from '../../features/hasMounted/useHasMounted'

// const { setTheme } = useNextTheme()
// const { isDark, type } = useTheme()
// const hasMounted = useHasMounted()

// onChange={(e: ChangeEvent<HTMLInputElement> | SwitchEvent) =>
//   setTheme(e.target.checked ? 'dark' : 'light')
// }

// src = { copied? '/icons/checkmark-icon.svg': '/icons/copy-icon.svg' }
