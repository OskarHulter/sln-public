import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { LoadingSpinner } from './LoadingSpinner'

const Story: ComponentMeta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  title: 'LoadingSpinner',
}
export default Story

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
