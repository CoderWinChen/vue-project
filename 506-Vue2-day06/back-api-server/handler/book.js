import db from '../db/index.js'
import dayjs from 'dayjs';
export async function getBooksList_Handler(req, res) {
  const sql = 'select * from ev_book'
  try {
    const [rows] = await db.query(sql)
  
    rows.forEach(item=>{
      item.publish_date = dayjs(item.publish_date).format('YYYY-MM-DD HH:mm:ss')
    })

    res.send({
      status: 0,
      msg: '书籍查询成功',
      data: rows
    })
  } catch (error) {
    res.send({
      status: 1,
      msg: '数据库异常',
      desc: error.message
    })
  }
}
