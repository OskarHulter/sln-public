import { render, RenderOptions } from '@testing-library/react'
import React from 'react'
import PersonalWebUiProvider from '../personal-web/providers/PersonalWebUiProvider.js'

const AllProviders = ({ children }: { children: React.ReactNode }) => (
  <PersonalWebUiProvider> {children}</PersonalWebUiProvider>
)

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  })

export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
