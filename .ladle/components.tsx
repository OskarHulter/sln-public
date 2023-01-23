import type { GlobalProvider } from "@ladle/react"
import React from 'react'
import PersonalWebUiProvider from '../packages/ui/shared/src/personal-web/providers/PersonalWebUiProvider'
export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <PersonalWebUiProvider>
    <h1>Theme: {globalState.theme}</h1>
    <h2>{storyMeta.customValue}</h2>
    {children}
  </PersonalWebUiProvider>
)
