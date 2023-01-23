import type { GlobalProvider } from "@ladle/react"
import React from 'react'
import SharedUiProvider from '../packages/ui/src/personal-web/providers/PersonalWebUiProvider'
export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <SharedUiProvider>
    <h1>Theme: {globalState.theme}</h1>
    <h2>{storyMeta.customValue}</h2>
    {children}
  </SharedUiProvider>
)
