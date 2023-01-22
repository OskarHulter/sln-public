import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { BaseProps } from '../../types.js'
import theme from '../styles/themes/default.js'

export function PersonalWebUiProvider({ children }: BaseProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: theme.dark.className,
        dark: theme.light.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  )
}

export default PersonalWebUiProvider
