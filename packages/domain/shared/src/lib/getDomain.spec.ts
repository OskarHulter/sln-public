import content from './content.js'
import getDomain from './getDomain.js'

describe('getDomain', () => {
  it('should work', () => {
    expect(getDomain()).toEqual(content)
  })
})
