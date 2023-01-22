import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { TextareaField } from './TextareaField.js'

const Story: ComponentMeta<typeof TextareaField> = {
  component: TextareaField,
  title: 'TextareaField',
}
export default Story

const Template: ComponentStory<typeof TextareaField> = (args) => <TextareaField {...args} />

export const Primary = Template.bind({})
Primary.args = {}
