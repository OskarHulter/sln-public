import { Container, Switch, SwitchEvent, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import type { ChangeEvent } from 'react'
import { useHasMounted } from '../../features/hasMounted/useHasMounted'
import { ClientOnly } from '../../providers/ClientOnly'

export default function ThemeSwitch() {
  const { setTheme } = useNextTheme()
  const { isDark, type } = useTheme()
  const hasMounted = useHasMounted()

  // if (!hasMounted) {
  //   return (
  //     <Switch
  //       color={'primary'}
  //       checked={false}
  //       size='xl'
  //       iconOn={<SunIcon filled />}
  //       iconOff={<MoonIcon filled />}
  //       onChange={() => console.log('toggling theme')}
  //     />
  //   )<SunIcon color='$blue700' />
  // checked={hasMounted ? isDark : type === 'dark' ? true : false}
  // }
  return (
    <Container css={{ width: 'fit-content', m: 0, p: 0 }}>
      <ClientOnly>
        <Switch
          color='secondary'
          disabled
          bordered
          checked={isDark === undefined ? true : isDark}
          size='xl'
          onChange={(e: ChangeEvent<HTMLInputElement> | SwitchEvent) =>
            setTheme(e.target.checked ? 'dark' : 'light')
          }
          iconOn={
            <Image
              src='/icons/sun-ray.svg'
              alt='activate light theme'
              width={50}
              height={50}
            />
          }
          iconOff={
            <Image
              src='/icons/moon.svg'
              alt='activate dark theme'
              width={50}
              height={50}
            />
          }
        />
      </ClientOnly>
    </Container>
  )
}
