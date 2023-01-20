import React from 'react'
import { RenderOptions, render } from '@testing-library/react'
import { SharedUiProvider } from '../src'


const AllProviders = ({ children }: { children: React.ReactNode }) => <SharedUiProvider> {children}</SharedUiProvider>


const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) =>
  render(ui, {
    wrapper: AllProviders,
    ...options,
  })

export * from '@testing-library/react'
export { default as userEvent } from '@testing-library/user-event'
// override render export
export { customRender as render }
