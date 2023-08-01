const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    // ctx.response

    // ctx.response.body = 'hello world!'
    //可以省略response
    ctx.body = 'hello world!'
})

app.listen(3000)