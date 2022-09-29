const express = require('express')
const { findUser_handle} = require('../router_handler/user')
const router = express.Router()
router.get('/findUser/:username', findUser_handle)
module.exports = router