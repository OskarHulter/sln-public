import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { ContentList } from './ContentList.js'

const Story: ComponentMeta<typeof ContentList> = {
  component: ContentList,
  title: 'ContentList',
}
export default Story

const Template: ComponentStory<typeof ContentList> = (args) => <ContentList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
