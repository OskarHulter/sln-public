import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SvgDb } from './Db'

const Story: ComponentMeta<typeof SvgDb> = {
  component: SvgDb,
  title: 'SvgDb',
}
export default Story

const Template: ComponentStory<typeof SvgDb> = (args) => <SvgDb {...args} />

export const Primary = Template.bind({})
Primary.args = {}
