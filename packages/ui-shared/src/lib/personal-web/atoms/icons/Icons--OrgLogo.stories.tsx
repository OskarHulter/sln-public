import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { OrgLogo } from './Icons'

const Story: ComponentMeta<typeof OrgLogo> = {
  component: OrgLogo,
  title: 'OrgLogo',
}
export default Story

const Template: ComponentStory<typeof OrgLogo> = (args) => <OrgLogo {...args} />

export const Primary = Template.bind({})
Primary.args = {}
