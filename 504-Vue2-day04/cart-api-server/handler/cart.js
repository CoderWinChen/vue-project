import db from '../db/index.js'
export async function getAllCartsHandler(req, res) {
  const sql = 'select * from ev_cart'
  try {
    const [rows] = await db.query(sql)
    console.log(rows)
    res.send({
      status: 0,
      message: '查询数据成功',
      data: rows
    })
  } catch (error) {
    console.log(error.message)
    res.send({
      status: 1,
      message: '查询数据失败',
      desc: error.message
    })
  }
}
export async function getByIdHandler(req, res) {
  const sql = 'select * from ev_cart where id = ?'
  console.log(req.query);
  try {
    const [rows] = await db.query(sql, req.query.id)
    console.log(rows)
    res.send({
      status: 0,
      message: '查询数据成功',
      data: rows
    })
  } catch (error) {
    console.log(error.message)
    res.send({
      status: 1,
      message: '查询数据失败',
      desc: error.message
    })
  }
}
