import { NextUIProvider } from '@nextui-org/react'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import type { ProviderProps } from '../../types'
import Layout from '../web3/Layout'

// type WebUiProviderProps = {
//   theme: {
//     light: string
//     dark: string
//   }
//   defaultTheme?: 'light' | 'dark'
// } & ProviderProps

export default function WebUiProvider({ initialized, children }: ProviderProps) {
  return (
    <NextUIProvider>
      <Layout initialized={initialized}>
        <BalancerProvider>{children}</BalancerProvider>
      </Layout>
    </NextUIProvider>
  )
}
