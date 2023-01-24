import { render } from '@testing-library/react'
import Email from './notion-magic-link'

describe('Email', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Email />)
    expect(baseElement).toBeTruthy()
  })
})
