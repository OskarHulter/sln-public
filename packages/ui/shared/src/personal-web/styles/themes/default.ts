import { createTheme } from '@nextui-org/react'
// eslint-disable-next-line prettier/prettier
import type { } from '@stitches/react'
import sharedTheme from './shared'

export const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
})

export const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
})

export default {
  light: lightTheme,
  dark: darkTheme,
}
