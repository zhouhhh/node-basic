const chai = require('chai')
chai.should()

describe('chai should Demo', () => {
    it('use should lib', () => {
        const value = 'hello'
        value.should.exist.and.equal('hello').and.have.length(5).and.be.a('string')
    })
})