import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider } from 'react-wrap-balancer'
import type { BaseProps } from '../../types'
import theme from '../styles/themes/default'
import Layout from '../web3/Layout'

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
        <Provider>
          <Layout initialized>{children}</Layout>
        </Provider>
      </NextUIProvider>
    </NextThemesProvider>
  )
}
