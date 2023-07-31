const express = require('express')
const IndexRouter=require('./router2/IndexRouter')

const app = express()
//应用级别中间件
app.use((req,res,next)=>{
    console.log('验证token');
    next()
})
//应用级别中间件---挂载路由级别的中间件,匹配到/api后会走到路由
app.use('/api',IndexRouter)
app.listen('3000', () => {
    console.log('server start');
})