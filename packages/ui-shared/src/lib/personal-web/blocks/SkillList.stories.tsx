import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { SkillList } from './SkillList.js'

const Story: ComponentMeta<typeof SkillList> = {
  component: SkillList,
  title: 'SkillList',
}
export default Story

const Template: ComponentStory<typeof SkillList> = (args) => <SkillList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
