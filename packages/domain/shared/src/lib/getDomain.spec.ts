import content from './content'
import getDomain from './getDomain'

describe('getDomain', () => {
  it('should work', () => {
    expect(getDomain()).toEqual(content)
  })
})
