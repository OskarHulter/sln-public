import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgErrorSolid } from './ErrorSolid'

const Story: ComponentMeta<typeof SvgErrorSolid> = {
  component: SvgErrorSolid,
  title: 'SvgErrorSolid',
}
export default Story

const Template: ComponentStory<typeof SvgErrorSolid> = (args) => <SvgErrorSolid {...args} />

export const Primary = Template.bind({})
Primary.args = {}
