const db = require('../db/db')

async function createErtekeles(ertekeles_szoveg, ertekeles, name) {
    const sql = 'INSERT INTO ertekelesek (ertekeles_szoveg, ertekeles, name, date) VALUES (?, ?, ?, CURRENT_TIMESTAMP())'
    const [result] = await db.query(sql, [ertekeles_szoveg, ertekeles, name])
    return result.insertId || null
}

module.exports = {createErtekeles}