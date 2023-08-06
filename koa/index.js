const Koa = require('koa')

const app = new Koa()
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const session = require('koa-session-minimal')

const router = require('./routes')

//应用级中间件
app.use(bodyParser())//获取post参数
app.use(static(path.join(__dirname, 'public')))//静态资源
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }))//配置模版引擎

//session配置
app.use(session({
    key: 'sessionId',
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}))
//session判断拦截
app.use(async (cxt, next) => {
    if (cxt.url.includes('login')) {
        await next()
        return
    }
    console.log(cxt.session);//调用user/login接口成功后会设置session.user值
    if (cxt.session.user) {
        cxt.session.date = Date.now()//设置session重新计时
        await next()
    } else {
        cxt.redirect('/login')
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)