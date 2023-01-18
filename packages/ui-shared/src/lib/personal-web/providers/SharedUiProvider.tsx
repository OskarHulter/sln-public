import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
import { darkTheme, lightTheme } from '../../design'
import { BaseProps } from '../../types'


export function SharedUiProvider({ children }: BaseProps) {


  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: darkTheme.className,
        dark: lightTheme.className,
      }}
    >
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </NextThemesProvider>
  )
}

export default SharedUiProvider
