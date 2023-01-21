import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgMailSolid } from './MailSolid'

const Story: ComponentMeta<typeof SvgMailSolid> = {
  component: SvgMailSolid,
  title: 'SvgMailSolid',
}
export default Story

const Template: ComponentStory<typeof SvgMailSolid> = (args) => <SvgMailSolid {...args} />

export const Primary = Template.bind({})
Primary.args = {}
