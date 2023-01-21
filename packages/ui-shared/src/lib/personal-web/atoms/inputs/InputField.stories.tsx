import type { Story } from '@ladle/react'
import { InputProps } from '../../forms/types.js'
import InputField from './InputField.js'

export const InputFieldStory: Story<InputProps> = (args) => <InputField {...args} />

InputFieldStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

InputFieldStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
