import { NextUIProvider } from '@nextui-org/react'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import type { BaseProps } from '../../types'
import Layout from '../web3/Layout'

// type WebUiProviderProps = {
//   theme: {
//     light: string
//     dark: string
//   }
//   defaultTheme?: 'light' | 'dark'
// } & ProviderProps

export default function WebUiProvider({ children }: BaseProps) {
  return (
    <BalancerProvider>
      <NextUIProvider>
        <Layout>{children}</Layout>
      </NextUIProvider>
    </BalancerProvider>
  )
}
