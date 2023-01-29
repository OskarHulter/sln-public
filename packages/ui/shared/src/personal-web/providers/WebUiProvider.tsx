import { NextUIProvider } from '@nextui-org/react'
import { Provider as BalancerProvider } from 'react-wrap-balancer'
import { theme } from '../..'
import type { BaseProps } from '../../types'
import Layout from '../web3/Layout'

export type UiProviderProps = {
  fonts: string
} & BaseProps
export default function WebUiProvider({ children, fonts }: UiProviderProps) {
  return (
    <BalancerProvider>
      <NextUIProvider theme={theme.dark}>
        <Layout fonts={fonts}>{children}</Layout>
      </NextUIProvider>
    </BalancerProvider>
  )
}
