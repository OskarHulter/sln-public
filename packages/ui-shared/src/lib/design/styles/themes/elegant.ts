import { createTheme } from '@nextui-org/react'
import { sharedTheme } from './shared'


export const lightElegantTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  className: 'light-elegant',
  theme: {
    colors: {
      primary: '#000000',
      primaryLight: '#AAAAAA',
      success: '#a2a2a2',
    },
    radii: {
      md: '4px',
    },
  },
})

export const darkElegantTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  className: 'dark-elegant',
  theme: {
    colors: {
      primary: '#ffffff',
      primaryLight: '#222222',
      success: '#a2a2a2',
    },
    radii: {
      md: '4px',
    },
  },
})
