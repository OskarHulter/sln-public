import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { MailForm } from './MailForm'

const Story: ComponentMeta<typeof MailForm> = {
  component: MailForm,
  title: 'MailForm',
}
export default Story

const Template: ComponentStory<typeof MailForm> = (args) => <MailForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}
