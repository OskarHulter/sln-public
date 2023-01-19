import { createTheme } from '@nextui-org/react'
import sharedTheme from './shared.js'


/*
  ex: padding, margin, and top, left, right, bottom, width, height
  spacing: {
    min: 'min-content',
    max: 'max-content',
    fit: 'fit-content',
    screen: '100vw',
    full: '100%',
    px: '1px',
  }

    breakpoints: {
    xs: '650px',
    sm: '960px',
    md: '1280px',
    lg: '1400px',
    xl: '1920px'
  }
*/

export const lightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
})

export const darkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
})
