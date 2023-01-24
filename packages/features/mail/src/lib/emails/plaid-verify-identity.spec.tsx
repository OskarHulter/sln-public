import { render } from '@testing-library/react'
import Email from './plaid-verify-identity'

describe('Email', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Email />)
    expect(baseElement).toBeTruthy()
  })
})
