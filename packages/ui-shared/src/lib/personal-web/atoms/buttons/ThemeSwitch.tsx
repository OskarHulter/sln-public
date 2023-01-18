import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react'
import { MoonIcon, SunIcon } from '../../atoms/icons/Icons'
import { useHasMounted } from '../../hooks/useHasMounted'


export function ThemeSwitch() {
  const { setTheme } = useNextTheme()
  const { isDark } = useTheme()
  const hasMounted = useHasMounted()
  if (!hasMounted) {
    return <Switch
      color={'primary'}
      checked={false}
      size='xl'
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}
      onChange={(e) => console.log(e, 'toggling theme')}
    />
  }
  return (
    <Switch
      color={'primary'}
      checked={isDark}
      size='xl'
      iconOn={<SunIcon filled />}
      iconOff={<MoonIcon filled />}

      onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
    />
  )
}

export default ThemeSwitch
