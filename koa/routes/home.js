const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    //设置cookies
    ctx.cookies.set('name', 'zhhh');
    //获取cookies
    console.log(ctx.cookies.get('name'));
    await ctx.render('home', { username: 'zhouhang' }) //自动找views/home.ejs,因为是异步记载，所以需要async/await等待页面记载完成
})

module.exports = router