import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgShieldSolid } from './ShieldSolid'

const Story: ComponentMeta<typeof SvgShieldSolid> = {
  component: SvgShieldSolid,
  title: 'SvgShieldSolid',
}
export default Story

const Template: ComponentStory<typeof SvgShieldSolid> = (args) => <SvgShieldSolid {...args} />

export const Primary = Template.bind({})
Primary.args = {}
