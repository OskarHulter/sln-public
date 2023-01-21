import type { GlobalProvider } from "@ladle/react"
import React from 'react'
import SharedUiProvider from '../packages/ui-shared/src/lib/personal-web/providers/personalWebUiProvider.js'
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
