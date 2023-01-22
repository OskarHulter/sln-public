import { createTheme } from '@nextui-org/react'
import sharedTheme from './shared.js'

export const stresslessLightTheme = createTheme({
  ...sharedTheme,
  type: 'light',
  theme: {
    colors: {
      // background colors (light)
      background: '$white',
      backgroundAlpha: 'rgba(255, 255, 255, 0.8)',
      backgroundGrayAlpha: 'rgba(255, 255, 255, 0.5)',
      backgroundBlackAlpha: 'rgba(37,33,33, 0.8)',
      foreground: '$black',
      foregroundContrast: '$blackContrast',
      backgroundContrast: '$whiteContrast',

      //semantic colors (light)
      blue50: '#EDF5FF',
      blue900: '#00254D',

      // brand colors
      primaryLight: '$blue200',
      primaryLightHover: '$blue300',
      primaryLightActive: '$blue400',
      primaryLightContrast: '$blue600',
      primary: '$blue600',
      primaryBorder: '$blue500',
      primaryBorderHover: '$blue600',
      primarySolidHover: '$blue700',
      primarySolidContrast: '$white',
      primaryShadow: '$blue500',
      // ... rest of colors (secondary, success, warning, error, etc)
    },
  },
})

export const stresslessDarkTheme = createTheme({
  ...sharedTheme,
  type: 'dark',
})

export default { light: stresslessLightTheme, dark: stresslessDarkTheme }
