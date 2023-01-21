import { render } from '@testing-library/react'
import FeaturesMail from './FeaturesMail.js'

describe('FeaturesMail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturesMail />)
    expect(baseElement).toBeTruthy()
  })
})
