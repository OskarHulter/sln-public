import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { darkTheme, lightTheme } from '../../design/styles/themes/index.js'
import { BaseProps } from '../../types.js'

export function personalWebUiProvider({ children }: BaseProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: darkTheme.className,
        dark: lightTheme.className,
      }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  )
}

export default personalWebUiProvider
