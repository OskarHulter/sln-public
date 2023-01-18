import { createTheme } from '@nextui-org/react'
import { sharedTheme } from './shared'


const colors = {
  primary: '#27b3ff',
  primaryLight: '#ffc612',
  secondary: '#956ed4',
  success: '#f195f0',
}

export const lightGradientTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  theme: {
    colors,
  },
})

export const darkGradientTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  theme: {
    colors,
  },
})





