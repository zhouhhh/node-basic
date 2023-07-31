const express = require('express')

const app = express()

app.get('/', (req, res) => {
    // res.send('hello world')
    res.send({
        key: 111,
        value: 222
    })
})

const func1 = (req, res, next) => {
    //这里是中间件
    console.log('1122', '验证token');
    const isValid = true
    if (isValid) {
        next()//中间件里要掉用next函数，下面的中间件才能继续执行
    } else {
        res.send('error')
    }
}
//应用级别的中间件跟顺序有关，放在这里掉用use，只有/home和/login两个路由会掉用这个中间件
app.use(func1)
const func2 = (req, res) => {
    res.send('home')
}
// app.get('/home', [func1, func2])
app.get('/home', [func2])
app.get('/login', (req, res) => {
    res.write('login')
    res.end()
})
app.listen('3000', () => {
    console.log('server start');
})