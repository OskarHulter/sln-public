import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { MailIcon } from './Icons'

const Story: ComponentMeta<typeof MailIcon> = {
  component: MailIcon,
  title: 'MailIcon',
}
export default Story

const Template: ComponentStory<typeof MailIcon> = (args) => <MailIcon {...args} />

export const Primary = Template.bind({})
Primary.args = {}
