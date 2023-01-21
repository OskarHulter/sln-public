import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { ContentList } from './ContentList'

const Story: ComponentMeta<typeof ContentList> = {
  component: ContentList,
  title: 'ContentList',
}
export default Story

const Template: ComponentStory<typeof ContentList> = (args) => <ContentList {...args} />

export const Primary = Template.bind({})
Primary.args = {}
