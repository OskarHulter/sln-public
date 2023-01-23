import type { Story } from '@ladle/react'
import type { InputProps } from '../forms/types'
import LoadingSpinner from './LoadingSpinner'

export const LoadingSpinnerStory: Story<InputProps> = () => <LoadingSpinner />

LoadingSpinnerStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
