import { Switch, SwitchEvent, useTheme } from '@nextui-org/react'
import { useTheme as useNextTheme } from 'next-themes'
import React from 'react'
import { MoonIcon, SunIcon } from '../../atoms/icons/Icons.js'
import { useHasMounted } from '../../features/hasMounted/useHasMounted.js'

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
      onChange={(e: React.ChangeEvent<HTMLInputElement> | SwitchEvent) =>
        setTheme(e.target.checked ? 'dark' : 'light')
      }
    />
  )
}
