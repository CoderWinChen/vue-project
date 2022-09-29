import express from 'express';
import { getBooksList_Handler } from '../handler/book.js';
const bookRouter = express.Router()
bookRouter.get('/home/book', getBooksList_Handler)
export default bookRouter