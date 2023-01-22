import type { ComponentMeta, ComponentStory } from '@storybook/react'
import LoadingSpinner from './LoadingSpinner.js'

const Story: ComponentMeta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
  title: 'LoadingSpinner',
}
export default Story

const Template: ComponentStory<typeof LoadingSpinner> = (args) => <LoadingSpinner {...args} />

export const Primary = Template.bind({})
Primary.args = {}
