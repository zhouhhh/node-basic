const Koa = require('koa')
const Router = require('koa-router')

const userRouter = require('./routes/user.js')
const listRouter = require('./routes/list.js')

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

//先注册路由级组件
router.use('/user', userRouter.routes(), userRouter.allowedMethods())
router.use('/list', listRouter.routes(), listRouter.allowedMethods())

//应用级组件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)