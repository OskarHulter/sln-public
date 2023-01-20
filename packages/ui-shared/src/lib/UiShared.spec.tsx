import { render, screen } from '@testing-library/react'
import UiShared from './UiShared'

describe('UiShared', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiShared />)
    expect(baseElement).toBeTruthy()
    screen.debug()
  })
})
