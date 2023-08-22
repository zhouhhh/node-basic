const chai = require('chai')
const assert = chai.assert

describe('chai assert Demo', () => {
    it('use assert lib', () => {
        const value = 'hello world'
        assert.typeOf(value, 'string')
        assert.equal(value, 'hello world')
        assert.lengthOf(value, 11)
    })
})