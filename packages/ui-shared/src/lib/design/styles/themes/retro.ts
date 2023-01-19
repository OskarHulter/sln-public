import { createTheme } from '@nextui-org/react'
import sharedTheme from './shared.js'


export const lightRetroTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  className: 'light-retro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E',
    },
  },
})

export const darkRetroTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  className: 'dark-retro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E',
    },
  },
})

export default { lightRetroTheme, darkRetroTheme }
