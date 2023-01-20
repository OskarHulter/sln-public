import { getDomain } from './domain-shared.js'

describe('domainShared', () => {
  it('should work', () => {
    expect(getDomain()).toEqual('domain-shared')
  })
})
