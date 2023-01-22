import type { Story } from '@ladle/react'
import { InputProps } from '../../forms/types.js'
import TextareaField from './TextareaField.js'

export const TextareaFieldStory: Story<InputProps> = (args) => <TextareaField {...args} />

TextareaFieldStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

TextareaFieldStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
