const assert = require('assert');
const axios = require('axios');

describe('测试接口', () => {
    it('返回html代码片段测试', async () => {
        const res = await axios.get('http://localhost:3000/')
        assert.strictEqual(res.data, '<h1>hello</h1>')
    })
})