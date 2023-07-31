const Koa = require('koa')

const app = new Koa()

app.use((ctx, next) => {
    // ctx.response

    ctx.response.body = 'hello world!'
})

app.listen(3000)