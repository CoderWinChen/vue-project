const express = require('express');
const router = require('./router');
const cors = require('cors')
const app = express()
app.use(cors())
app.use((req,res,next)=>{
    res.cc = (err,status = 1)=>{
        return res.send({
            status,
            msg: err
        })
    }
    next()
})
app.use(router)
// 错误级别中间件
app.use((err,req,res,next)=>{
    if (err){
        return res.cc(err.message)
    }
})
app.listen(9000,()=>{
    console.log('server running at http://localhost:9000');
})