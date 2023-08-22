const sum = require('../sum')
const assert = require('assert')

// console.log(sum(1, 2, 3))

// assert.strictEqual(sum(), 0)
// assert.strictEqual(sum(1), 1)
// assert.strictEqual(sum(1, 2), 3)
// assert.strictEqual(sum(1, 2, 3), 6)

describe('大组1测试', () => {
    describe('小组1测试', () => {
        it('sum() 结果返回0', () => {
            assert.strictEqual(sum(), 0)
        })
        it('sum(1) 结果返回1', () => {
            assert.strictEqual(sum(1), 1)
        })
    })
    describe('小组2测试', () => {
        it('sum(1,2) 结果返回3', () => {
            assert.strictEqual(sum(1, 2), 3)
        })
        it('sum(1,2,3) 结果返回6', () => {
            assert.strictEqual(sum(1, 2, 3), 6)
        })
    })
})