const express = require('express')
const HomeRouter = require('./router3/HomeRouter')
const LoginRouter = require('./router3/LoginRouter')

const app = express()

//配置模版引擎--服务端渲染
app.set('views','./views')
app.set('view engine','ejs')

//配置静态资源
app.use(express.static('public'))
app.use(express.static('static'))

//应用级别中间件
app.use((req, res, next) => {
    console.log('验证token2222');
    next()
})

//配置解析post请求的中间件
app.use(express.urlencoded({ extended: false }))//post参数类似于url上的username=zhouhang&password=123
app.use(express.json())//post参数类似于body里的{"username":"zhouhang","password"="123"}

//应用级别中间件---挂载路由级别的中间件,匹配到/api后会走到路由
//分别管理不同模块的路由，以及多级路由
app.use('/home', HomeRouter)
app.use('/login', LoginRouter)

//错误处理中间件
app.use((err, req, res, next) => {
    console.log(err, req, res);
    res.status(404).send('没找到')
})

app.listen('3000', () => {
    console.log('server start');
})