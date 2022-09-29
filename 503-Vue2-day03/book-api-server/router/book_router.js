import express from 'express';
import { getBook, addBook } from '../handler/book_handler.js';
const bookRouter = express.Router()
bookRouter.get('/getBook', getBook)
bookRouter.post('/addBook', addBook)
export default bookRouter