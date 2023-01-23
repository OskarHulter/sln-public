import type { Story } from '@ladle/react'
import { CheckboxInputField } from '../../forms/types'
import CheckboxField from './CheckboxField'

export const CheckboxFieldStory: Story<CheckboxInputField> = (args) => <CheckboxField {...args} />

CheckboxFieldStory.argTypes = {
  onClick: {
    action: 'clicked!',
  },
}

CheckboxFieldStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
