import express from 'express';
import { getAllCartsHandler, getByIdHandler } from '../handler/cart.js'
const CartRouter = express.Router()
// 注册路由
CartRouter.get('/getAllCarts',getAllCartsHandler)
CartRouter.get('/getCartById',getByIdHandler)
export default CartRouter