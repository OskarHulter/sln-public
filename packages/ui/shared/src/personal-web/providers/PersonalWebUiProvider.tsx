import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-wrap-balancer'
import type { BaseProps } from '../../types'
import theme from '../styles/themes/default'

export default function PersonalWebUiProvider({ children }: BaseProps) {
  return (
    <NextThemesProvider
      defaultTheme='system'
      attribute='class'
      value={{
        light: theme.dark.className,
        dark: theme.light.className,
      }}
    >
      <NextUIProvider>
        <Provider>{children}</Provider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
