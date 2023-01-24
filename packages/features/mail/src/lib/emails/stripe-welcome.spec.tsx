import { render } from '@testing-library/react'
import Email from './stripe-welcome'

describe('Email', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Email />)
    expect(baseElement).toBeTruthy()
  })
})
