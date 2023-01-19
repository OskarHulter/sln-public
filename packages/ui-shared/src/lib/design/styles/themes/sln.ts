import { createTheme } from '@nextui-org/react'
import sharedTheme from './shared.js'


const buttonGradient = `316deg, $primary 3 %, $secondaryLight  100 %`

const colors = {
  primary: 'rgb(75, 161, 252)', //this and...
  primaryLight: '#d9c2f0',
  secondary: '#7928CA',
  secondaryLight: 'rgb(236, 42, 237)', // this!
  success: '#FF1CF7',
  gradient: buttonGradient,
}

export const lightSlnTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  theme: {
    colors,
  },
})

export const darkSlnTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
  theme: {
    colors,
  },
})

export default { lightSlnTheme, darkSlnTheme }
