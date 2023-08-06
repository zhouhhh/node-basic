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
    .post('/login', (ctx, next) => {
        console.log(ctx.request.body);
        const { username, password } = ctx.request.body
        if (username === 'zhouhang' && password === '111') {
            //设置sessionId
            ctx.session.user = {
                username: username
            }
            ctx.body = {
                ok: 1,
            }
        } else {
            ctx.body = {
                ok: 0,
            }
        }
    })

module.exports = router