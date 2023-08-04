const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// //增
// router.post('/list', (ctx, next) => [
//     ctx.body = {
//         ok: 1,
//         info: 'add success'
//     }
// ])
// //获取
// router.get('/list', (ctx, next) => [
//     ctx.body = ['111', '222', '333']
// ])
// //修改
// router.put('/list/:id', (ctx, next) => [
//     ctx.body = {
//         ok: 1,
//         info: 'put success'
//     }
// ])
// //删除
// router.del('/list/:id', (ctx, next) => [
//     ctx.body = {
//         ok: 1,
//         info: 'delete success'
//     }
// ])

//或者简写写成以下链式调用
//增
router.post('/list', (ctx, next) => [
    ctx.body = {
        ok: 1,
        info: 'add success'
    }
])
    .get('/list', (ctx, next) => [
        ctx.body = ['111', '222', '333']
    ])
    .put('/list/:id', (ctx, next) => {
        console.log('获取参数', ctx.params);
        ctx.body = {
            ok: 1,
            info: 'put success'
        }
    })
    .del('/list/:id', (ctx, next) => [
        ctx.body = {
            ok: 1,
            info: 'delete success'
        }
    ])

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)