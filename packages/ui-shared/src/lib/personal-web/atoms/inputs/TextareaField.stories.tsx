import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextareaField } from './TextareaField'

const Story: ComponentMeta<typeof TextareaField> = {
  component: TextareaField,
  title: 'TextareaField',
}
export default Story

const Template: ComponentStory<typeof TextareaField> = (args) => <TextareaField {...args} />

export const Primary = Template.bind({})
Primary.args = {}
