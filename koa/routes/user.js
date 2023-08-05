const Router = require('koa-router')
const router = new Router()

//增
router.post('/', (ctx, next) => {
    console.log('11', ctx.request.body);//获取前端post请求传过来的参数（json格式或者form格式）

    ctx.body = {
        ok: 1,
        info: 'add user success'
    }
})
    .get('/', (ctx, next) => {
        console.log(ctx.query, ctx.querystring);//获取前端get请求传来的参数

        ctx.body = ['aaa', 'bbb', 'ccc']
    })
    .put('/:id', (ctx, next) => {
        console.log('获取参数', ctx.params);
        ctx.body = {
            ok: 1,
            info: 'put user success'
        }
    })
    .del('/:id', (ctx, next) => [
        ctx.body = {
            ok: 1,
            info: 'delete user success'
        }
    ])

module.exports = router