const Router = require('koa-router');
const JWT = require('../utils/JTW');
const UserModel = require('../model/UserModel')

const multer = require('@koa/multer');
const upload = multer({ dest: 'public/uploads' })

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
            //设置header的token
            const token = JWT.generate({
                _id: 'zhh',
                username: username
            }, "1d")
            ctx.set("Authorization", token)//将token设置到响应头

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
    .post('/upload', upload.single('avatar'), async (ctx, next) => {//上传接口
        console.log(ctx.request.body, ctx.file);
        const { username, password, age } = ctx.request.body
        const avatar = ctx.file ? `/uploads/${ctx.file.filename}` : ''

        //利用User模型进行存储操作 UserModel.create
        await UserModel.create({
            username,
            password,
            age,
            avatar
        })

        ctx.body = {
            ok: 1,
        }
    })

module.exports = router