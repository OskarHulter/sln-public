import { render } from '@testing-library/react'
import Email from './sln-welcome-user'

describe('Email', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Email />)
    expect(baseElement).toBeTruthy()
  })
})
