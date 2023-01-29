// array of strings
export default {
  stories: [
    'packages/ui/**/*.stories.{js,jsx,ts,tsx}',
    'packages/data-access-shared/**/*.stories.tsx',
    'packages/domain-shared/**/*.stories.tsx',
    'packages/content-shared/**/*.stories.tsx',
  ],
  defaultStory: 'Layout',
  addons: {
    theme: {
      enabled: true,
      defaultState: 'dark',
    },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
      },
      defaultState: 0,
    },
  },
}
