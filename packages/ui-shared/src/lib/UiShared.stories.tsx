import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { UiShared } from './UiShared'

const Story: ComponentMeta<typeof UiShared> = {
  component: UiShared,
  title: 'UiShared',
}
export default Story

const Template: ComponentStory<typeof UiShared> = (args) => <UiShared {...args} />

export const Primary = Template.bind({})
Primary.args = {}
