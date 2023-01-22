import { ActionType, ThemeState, useLadleContext } from '@ladle/react'

export const StoryChangingTheTheme = () => {
  const { globalState, dispatch } = useLadleContext()
  return (
    <>
      <p>Active theme: {globalState.theme}</p>
      <button
        onClick={() =>
          dispatch({
            type: ActionType.UpdateTheme,
            value: globalState.theme === ThemeState.Dark ? ThemeState.Light : ThemeState.Dark,
          })
        }
      >
        Switch theme
      </button>
    </>
  )
}
