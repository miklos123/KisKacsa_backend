const { addTermek, findByTermekNev, findEtel, findItal, findDesszert } = require('../models/termekekModel')

async function termekek(req, res) {
    try {
        const { kategoria_id, nev, ar } = req.body
        const kep = req.file ? req.file.filename : null

        const exist = await findByTermekNev(nev)
        if (exist) {
            return res.status(401).json({ error: 'Ez a termék név már létezik!' })
        }

        if (!kategoria_id || !nev || !ar || !kep) {
            return res.status(400).json({ error: 'Minden mezőt ki kell tölteni!' })
        }

        const insertId = await addTermek(kategoria_id, nev, ar, kep)

        return res.status(201).json({
            message: 'Sikeresen hozzáadtad a terméket!',
            insertId
        })

    } catch (err) {
        return res.status(500).json({ error: 'Szerver oldali hiba', err })
    }
}

//etel lekerdez
async function getEtel(req, res) {
    try {
        const result = await findEtel()

        return res.status(200).json(result)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Nem sikerült lekérni az eredményeket' })
    }
}

//ital lekerdez
async function getItal(req, res) {
    try {
        const result = await findItal()

        return res.status(200).json(result)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Nem sikerült lekérni az eredményeket' })
    }
}

//desszert lekerdez
async function getDesszert(req, res) {
    try {
        const result = await findDesszert()

        return res.status(200).json(result)
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Nem sikerült lekérni az eredményeket' })
    }
}

module.exports = {termekek, getEtel, getItal, getDesszert}