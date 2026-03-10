const db = require('../db/db')

async function insertTermekAllergen(termek_id, allergen_id) {
    const [result] = await db.query(
        "INSERT INTO termekallergenek (termek_id, allergen_id) VALUES (?, ?)",
        [termek_id, allergen_id]
    );

    return result.insertId;
}

async function findByAllergen(termek_id, allergen_id) {
    const sql = 'SELECT * FROM termekallergenek WHERE termek_id = ? AND allergen_id = ?'
    const [result] = await db.query(sql, [termek_id, allergen_id])

    return result[0] || null
}

module.exports = {insertTermekAllergen, findByAllergen}