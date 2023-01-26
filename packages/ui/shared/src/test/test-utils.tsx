import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import WebUiProvider from '../personal-web/providers/WebUiProvider.js'

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <WebUiProvider> {children}</WebUiProvider>
)

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  })

export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
