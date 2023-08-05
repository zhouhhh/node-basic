const Koa = require('koa')

const app = new Koa()
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

const router = require('./routes')

//应用级中间件
app.use(bodyParser())//获取post参数
app.use(static(path.join(__dirname, 'public')))//静态资源
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }))//配置模版引擎
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)