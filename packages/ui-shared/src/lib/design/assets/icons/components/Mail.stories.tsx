import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgMail } from './Mail'

const Story: ComponentMeta<typeof SvgMail> = {
  component: SvgMail,
  title: 'SvgMail',
}
export default Story

const Template: ComponentStory<typeof SvgMail> = (args) => <SvgMail {...args} />

export const Primary = Template.bind({})
Primary.args = {}
