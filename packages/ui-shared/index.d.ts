/// <reference types="@stitches/react" />

declare module '*.svg' {
  const content: unknown
  export const ReactComponent: unknown
  export default content
}
