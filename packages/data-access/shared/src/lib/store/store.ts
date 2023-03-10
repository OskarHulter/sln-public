/* eslint-disable functional/immutable-data */
//import { Content, ContentKeys, content } from '@sln/content-shared'
import { content } from '@sln/domain-shared'
import { create } from 'zustand'
//import { immer } from 'zustand/middleware/immer'
import { combine } from 'zustand/middleware'

export type Content = typeof content
export type ContentKeys = keyof Content
// type ContentItem = null | Content

// type State = {
//   content: Content
//   contentList: ContentItem[]
//   contentFilter: string
//   isDark: boolean
// }

// type Actions = {
//   initContentList: (_: Content[]) => void
//   setContentFilter: (_: string) => void
//   toggleDarkMode: (_: boolean) => void
//   toggleTodo: (_: string) => void
// }
// const useContentStore = create(
//   immer<State & Actions>((set) => ({
//     content: content,
//     contentList: [null],
//     contentFilter: 'SHOW_ALL',
//     isDark: true,
//     initContentList: (initialContent) =>
//       set((state) => {
//         state.contentList = initialContent
//       }),
//     setContentFilter: (filter) =>
//       set((state) => {
//         state.contentFilter = filter
//       }),
//     toggleDarkMode: (isDark) => set((state) => state.isDark === !isDark),
//     toggleTodo: (key: ContentKeys) =>
//       set((state) => {
//         state.contentList[0][key].name = !state.contentList[contentId].name
//       }),
//   }))
// )
const useContentStore = create(
  combine({ content, filteredContent: {} }, (set) => ({
    init: (data: Content) => set((state) => ({ content: { ...state.content, data } })),
    filter: (key: ContentKeys) => set((state) => ({ filteredContent: state.content[key] })),
  }))
)

export default useContentStore
