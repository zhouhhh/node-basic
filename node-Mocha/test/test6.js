const assert = require('assert');
const axios = require('axios');

const supertest = require('supertest');
const app = require('../app')

//这里本地服务关闭后会报错
describe('测试接口', () => {
    it('返回html代码片段测试', async () => {
        const res = await axios.get('http://localhost:3000/')
        assert.strictEqual(res.data, '<h1>hello</h1>')
    })
})

describe('测试接口2', () => {
    let server
    it('返回html代码片段测试2', async () => {
        await supertest(server).get('/')
            .expect('Content-Type', /text\/html/)
            .expect(200, '<h1>hello</h1>')
    })
    //钩子函数
    before(() => {
        server = app.listen(3000)
    })
    after(() => server.close())//所有测试执行完后关闭服务
})