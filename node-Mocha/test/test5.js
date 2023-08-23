
const fs = require('fs');
const fsp = fs.promises
const assert = require('assert');
// const chai = require('chai')
// const expect = chai.expect

describe('异步测试', () => {
    it('异步测试读取文件', (done) => {
        fs.readFile('./1.txt', 'utf-8', (err, data) => {
            if (err) {
                done(err)
            } else {
                assert.strictEqual(data, 'hello')
                done()
            }
        })
    })
})

describe('异步测试2', () => {
    it('异步测试读取文件2', async () => {
        const data = await fsp.readFile('./1.txt', 'utf-8')
        assert.strictEqual(data, 'hello')
    })
})