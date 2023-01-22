import type { Story } from '@ladle/react'
import ThemeSwitch from './ThemeSwitch.js'

export const ThemeSwitchStory: Story = (args) => <ThemeSwitch {...args} />

ThemeSwitchStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

ThemeSwitchStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
