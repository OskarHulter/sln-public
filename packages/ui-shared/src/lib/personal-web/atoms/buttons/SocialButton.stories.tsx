import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { SocialButton } from './SocialButton'

const Story: ComponentMeta<typeof SocialButton> = {
  component: SocialButton,
  title: 'SocialButton',
}
export default Story

const Template: ComponentStory<typeof SocialButton> = (args) => <SocialButton {...args} />

export const Primary = Template.bind({})
Primary.args = {}
