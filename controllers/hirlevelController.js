const {createHirlevel, findByEmailHirlevel} = require('../models/hirlevelModel')

async function hirlevel(req, res) {
    try {
        const { email, veznev, kernev, szulnap } = req.body

        if (!email || !veznev || !kernev || !szulnap) {
            return res.status(400).json({ error: 'Minden mezőt ki kell tölteni!' })
        }

        const exist = await findByEmailHirlevel(email)
        if (exist) {
            return res.status(409).json({ error: 'Ezzel az email-al már feliratkoztak!' })
        }

        const insertId = await createHirlevel(email, veznev, kernev, szulnap)
        return res.status(201).json({ message: 'Sikeresen feliratkoztál a hírlevelünkre!', insertId })

    } catch (err) {
        return res.status(500).json({ error: 'Szerver oldali hiba', err })
    }
}

module.exports = {hirlevel}