import { Switch, SwitchEvent, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import type { ChangeEvent } from 'react'
import { MoonIcon, SunIcon } from '../../atoms/icons/Icons'
import { useHasMounted } from '../../features/hasMounted/useHasMounted'

export default function ThemeSwitch() {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return (
      <Switch
        color={'primary'}
        checked={false}
        size='xl'
        iconOn={<SunIcon filled />}
        iconOff={<MoonIcon filled />}
        onChange={() => console.log('toggling theme')}
      />
    )
  }
  return (
    <Switch
      color={'primary'}
      checked={isDark}
      size='xl'
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={(e: ChangeEvent<HTMLInputElement> | SwitchEvent) =>
        setTheme(e.target.checked ? 'dark' : 'light')
      }
    />
  )
}
