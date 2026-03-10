const db = require('../db/db')

async function findByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?'
    const [result] = await db.query(sql, [email])

    return result[0] || null
}

async function createUser(email, hash) {
    const sql = 'INSERT INTO users (user_id, email, psw) VALUES (NULL, ?, ?)'
    const [result] = await db.query(sql, [email, hash])

    return { insertId: result.insertId }
}

module.exports = { findByEmail, createUser }