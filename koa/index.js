const Koa = require('koa')
const router = require('./routes')

const app = new Koa()

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


//应用级中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)