import mysql from 'mysql2';
const db = mysql.createPool(
    {
        host: '127.0.0.1',
        port: 3306,
        database: 'test_node',
        user: 'root',
        password: 'root'
    }
)
export default db.promise()