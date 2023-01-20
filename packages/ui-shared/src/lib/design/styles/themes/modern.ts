import { createTheme } from '@nextui-org/react'
import sharedTheme from './shared.js'

export const lightModernTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  className: 'light-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#d9c2f0',
      success: '#FF1CF7',
    },
  },
})

export const darkModernTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  className: 'dark-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#582A87',
      success: '#FF1CF7',
    },
  },
})
