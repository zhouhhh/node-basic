const express = require('express')
const router = express.Router()
//路由级别中间件
router.get('/', (req, res) => {
    console.log(req.query);
    res.send('login')
})
router.get('/detail', (req, res) => {
    res.send('login-detail')
})
router.post('/', (req, res) => {
    console.log(req.body);//必须配置中间件
    const { username, password } = req.body
    if (username === 'zhouhang' && password === '123') {
        res.send({ ok: 1 })
    } else {
        res.send({ ok: 0 })
    }
})

//服务端渲染的接口
router.get('/login', (req, res) => {
    // res.send('login-detail')
    // res.send('<div>login</div>') //send代码片段和json
    // res.json([1,2,3]) //发送json
    //渲染模版后返回给前端
    res.render('login',{error:''})//找views文件夹下的login.ejs，发送模版
})
router.post('/loginpost', (req, res) => {
    console.log(req.body);//必须配置中间件
    const { username, password } = req.body
    if (username === 'zhouhang' && password === '123') {
        // res.send({ ok: 1 })
        res.redirect('/home/home')
    } else {
        // res.send({ ok: 0 })
        console.log('登录失败');
        res.render('login',{error:'账号或者密码错误'})
    }
})

module.exports = router