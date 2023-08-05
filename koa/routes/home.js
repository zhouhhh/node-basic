const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    await ctx.render('home', { username: 'zhouhang' }) //自动找views/home.ejs,因为是异步记载，所以需要async/await等待页面记载完成
})

module.exports = router