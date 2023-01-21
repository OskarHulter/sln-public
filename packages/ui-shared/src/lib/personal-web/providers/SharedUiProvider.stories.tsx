import type { Story } from '@ladle/react'
import { SharedUiProvider } from './SharedUiProvider.js'

export const ProviderStory: Story<typeof SharedUiProvider> = (args) => <div {...args}>hej</div>

ProviderStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

ProviderStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
