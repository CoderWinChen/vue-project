import express from 'express'
import cors from 'cors'
import bookRouter from './router/book.js';
const app = express()
app.use(cors())
app.use(bookRouter)
app.listen(9000,()=>{
  console.log('server runing at http://localhost:9000');
})