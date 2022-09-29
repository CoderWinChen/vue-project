//入口文件
import express from 'express';
import CartRouter from './router/cart.js';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(CartRouter)
app.listen(9000,()=>{
    console.log('server running at http://localhost:9000');
})