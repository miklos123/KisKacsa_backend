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

async function findEtel() {
    const sql = 'SELECT * FROM termekek WHERE kategoria_id = 1'
    const [result] = await db.query(sql)
    return result
}

async function findItal() {
    const sql = 'SELECT * FROM termekek WHERE kategoria_id = 2'
    const [result] = await db.query(sql)
    return result
}

async function findDesszert() {
    const sql = 'SELECT * FROM termekek WHERE kategoria_id = 3'
    const [result] = await db.query(sql)
    return result
}

async function delTermek(termek_id) {
    const sql = 'DELETE FROM termekek WHERE termekek.termek_id = ?'
    const [result] = await db.query(sql, [termek_id])
    return result
}

async function putTermek(nev,ar,kep) {
    const sql = 'UPDATE termekek SET nev = ?, ar = ?, kep = ? WHERE termekek.termek_id = 23'
    const [result] = await db.query(sql, [nev,ar,kep])
    return result
}

module.exports = { addTermek, findByTermekId, findByTermekNev, findEtel, findItal, findDesszert, delTermek, putTermek }