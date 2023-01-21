import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { InputField } from './InputField'

const Story: ComponentMeta<typeof InputField> = {
  component: InputField,
  title: 'InputField',
}
export default Story

const Template: ComponentStory<typeof InputField> = (args) => <InputField {...args} />

export const Primary = Template.bind({})
Primary.args = {}
