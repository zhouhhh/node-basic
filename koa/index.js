const Koa = require('koa')
const router = require('./routes')

const app = new Koa()
const static = require('koa-static')
const path = require('path')

//应用级中间件
app.use(static(path.join(__dirname, 'public')))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)