const db = require('../db/db')

async function addTermek(kategoria_id, nev, ar, kep) {
    const sql = 'INSERT INTO termekek (kategoria_id, nev, ar, kep) VALUES (?, ?, ?, ?)'
    const [result] = await db.query(sql, [kategoria_id, nev, ar, kep])
    //console.log(result.insertId);
    return result.insertId || null
    
}

async function findByTermekId(termek_id) {
    const sql = 'SELECT * FROM termekek WHERE termek_id = ?'
    const [result] = await db.query(sql, [termek_id])

    return result[0] || null
}

async function findByTermekNev(nev) {
    const sql = 'SELECT * FROM termekek WHERE nev = ?'
    const [result] = await db.query(sql, [nev])

    return result[0] || null
}

module.exports = {addTermek, findByTermekId, findByTermekNev}