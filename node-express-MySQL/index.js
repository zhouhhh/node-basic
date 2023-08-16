const express = require('express');
const app = express();
const mysql2 = require('mysql2');

app.get('/', async (req, res) => {
    //创建链接池，进行操作
    const config = getDBConfig();
    const promisePool = mysql2.createPool(config).promise()
    const name = '科技'
    // const data = await promisePool.query(`SELECT * FROM ev_article_cate where name="${name}" order by name desc limit 2 offset 0`)//字符串拼接的方式
    const data = await promisePool.query(`SELECT * FROM ev_article_cate where name=? and is_delete=? order by name desc limit 2 offset 0`, [name, 1])
    console.log(data[0])

    res.send({
        ok: 1,
        data: data[0]
    })
})
app.get('/insert', async (req, res) => {
    const config = getDBConfig();
    const promisePool = mysql2.createPool(config).promise()
    const data = await promisePool.query(`insert into ev_article_cate (name,alias,is_delete) values (?,?,?)`, ['化学', 'huaxue', 0])
    res.send({
        ok: 1,
        data: data[0]
    })
})
app.get('/update', async (req, res) => {
    const config = getDBConfig();
    const promisePool = mysql2.createPool(config).promise()
    const data = await promisePool.query(`update ev_article_cate set name=?, alias=? where id=?`, ['ccsw', 'kkl', 7])
    res.send({
        ok: 1,
        data: data[0]
    })
})
app.get('/delete', async (req, res) => {
    const config = getDBConfig();
    const promisePool = mysql2.createPool(config).promise()
    const data = await promisePool.query(`delete from ev_article_cate where id=?`, [7])
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