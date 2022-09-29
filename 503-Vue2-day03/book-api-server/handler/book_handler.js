import db from '../db/index.js';
export async function getBook(req, res) {
    const sql = 'select * from ev_book'
    const [result] = await db.query(sql)
    res.send({
        status: 0,
        msg: '你好',
        data: result
    })
}

export async function addBook(req, res) {
    const sql = 'insert into ev_book set ?'
    try {
        const book = {
            ...req.body,
            publish_date: new Date()
        }
        const [result] = await db.query(sql, book);

        if (result.affectedRows !== 1) {
            return res.send({
                status: 1,
                message: '添加书籍失败'
            })
        }
        res.send({
            status: 0,
            message: '添加书籍成功'
        })

    } catch (error) {
        res.send({
            status: 1,
            message: error.message
        })
    }
}