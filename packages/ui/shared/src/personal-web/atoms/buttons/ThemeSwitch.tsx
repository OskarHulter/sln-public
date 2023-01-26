import { Grid, Switch, SwitchEvent, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import { useTheme as useNextTheme } from 'next-themes'
import type { ChangeEvent } from 'react'
import { useHasMounted } from '../../features/hasMounted/useHasMounted'

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
    <Grid
      alignContent='center'
      justify='center'
      alignItems='center'
    >
      <Switch
        className='gradient-icon'
        color='secondary'
        checked={hasMounted ? isDark : true}
        size='xl'
        iconOn={
          <Image
            className='gradient-icon'
            src='/icons/sun-ray.svg'
            alt='toggle light theme'
            width={30}
            height={30}
          />
        }
        iconOff={
          <Image
            className='gradient-icon'
            src='/icons/moon.svg'
            alt='toggle dark theme'
            width={30}
            height={30}
          />
        }
        onChange={(e: ChangeEvent<HTMLInputElement> | SwitchEvent) =>
          setTheme(e.target.checked ? 'dark' : 'light')
        }
      />
    </Grid>
  )
}
