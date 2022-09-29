import express from 'express';
import bookRouter from './router/book_router.js';
import cors from 'cors';
const app = express()
app.use(cors())
app.use(express.urlencoded({
    extended:false
}))
app.use(bookRouter)
app.listen(9000,()=>{
    console.log('server running at http://localhost:9000');
})