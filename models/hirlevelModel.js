const db = require('../db/db')

async function findByEmailHirlevel(email) {
    const sql = 'SELECT * FROM hirlevel WHERE email = ?'
    const [result] = await db.query(sql, [email])
    return result[0] || null
}

async function createHirlevel(email, veznev, kernev, szulnap) {
    const sql = 'INSERT INTO hirlevel (email, veznev, kernev, szulnap) VALUES (?, ?, ?, ?)'
    const [result] = await db.query(sql, [email, veznev, kernev, szulnap])
    return result.insertId || null
}

module.exports = {createHirlevel, findByEmailHirlevel}