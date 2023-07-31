const express = require('express')
const router = express.Router()
//路由级别中间件
router.get('/', (req, res) => {
    res.send('home')
})
router.get('/detail', (req, res) => {
    res.send('home-detail')
})

router.get('/home', (req, res) => {
    const list=['aaa','bbb','ccc','ddd']
    const htmlStr='<b>我是加粗</b>'
    res.render('home',{list,htmlStr})
})

module.exports = router