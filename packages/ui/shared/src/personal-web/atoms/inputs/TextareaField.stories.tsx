import type { Story } from '@ladle/react'
import { InputProps } from '../../forms/types'
import TextareaField from './TextareaField'

export const TextareaFieldStory: Story<InputProps> = (args) => <TextareaField {...args} />

TextareaFieldStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

TextareaFieldStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
