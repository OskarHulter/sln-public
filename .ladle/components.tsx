import type { GlobalProvider } from "@ladle/react"
import React from 'react'
export const Provider: GlobalProvider = ({
  children,
  globalState,
  storyMeta,
}) => (
  <>
    <h1>Theme: {globalState.theme}</h1>
    <h2>{storyMeta.customValue}</h2>
    {children}
  </>
)
