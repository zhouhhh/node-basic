const Router = require('koa-router')
const router = new Router()

//增
router.post('/', (ctx, next) => [
    ctx.body = {
        ok: 1,
        info: 'add list success'
    }
])
    .get('/', (ctx, next) => [
        ctx.body = ['111', '222', '333']
    ])
    .put('/:id', (ctx, next) => {
        console.log('获取参数', ctx.params);
        ctx.body = {
            ok: 1,
            info: 'put list success'
        }
    })
    .del('/:id', (ctx, next) => [
        ctx.body = {
            ok: 1,
            info: 'delete list success'
        }
    ])

module.exports = router