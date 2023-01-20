/* eslint-disable-next-line */
export interface UiSharedProps { }

export function UiShared(props: UiSharedProps) {
  console.log('🚀 ~ file: UiShared.tsx:13 ~ UiShared ~ props', props)

  return (
    <div>
      <h1>Welcome to UiShared!</h1>
    </div>
  )
}

export default UiShared
