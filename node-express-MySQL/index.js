const express = require('express');
const app = express();
const mysql2 = require('mysql2');

app.get('/', async (req, res) => {
    //创建链接池，进行操作

    const config = getDBConfig();
    const promisePool = mysql2.createPool(config).promise()
    const data = await promisePool.query('SELECT * FROM ev_article_cate order by name desc limit 2 offset 0')
    console.log(data[0])

    res.send({
        ok: 1,
        data: data[0]
    })
})
app.listen(3001)

function getDBConfig() {
    return {
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: 'zhouhang123',
        database: 'my_db_01',
        connectionLimit: 1
    }
}