import type { Story } from '@ladle/react'
import type { InputProps } from '../forms/types.js'
import LoadingSpinner from './LoadingSpinner.js'

export const LoadingSpinnerStory: Story<InputProps> = () => <LoadingSpinner />

LoadingSpinnerStory.meta = {
  dependencies: ['next-ui', 'stitches'],
}
