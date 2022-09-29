// 用户处理函数模块
const db = require('../db')
module.exports.findUser_handle = (req, res) => {
    // 查询用户是否被占用
    const sql = 'select username,nickname,email,user_pic from ev_user where username = ?'
    db.query(sql, req.params.username, (err, result) => {
        if (err) {
            return res.cc(err.message)
        }
        if (result.length > 0) {
            return res.cc('用户名已被占用')
        }
        res.cc('用户名可用', 0)
    })
}