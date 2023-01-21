import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { CheckboxField } from './CheckboxField'

const Story: ComponentMeta<typeof CheckboxField> = {
  component: CheckboxField,
  title: 'CheckboxField',
}
export default Story

const Template: ComponentStory<typeof CheckboxField> = (args) => <CheckboxField {...args} />

export const Primary = Template.bind({})
Primary.args = {}
