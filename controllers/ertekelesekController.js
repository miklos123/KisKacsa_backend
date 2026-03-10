const {createErtekeles} = require('../models/ertekelesekModel')

async function ertekelesek(req, res) {
    try {
        const { ertekeles_szoveg, ertekeles, name } = req.body
        //console.log(email, veznev, kernev, szulnap);

        if (!ertekeles_szoveg || !ertekeles || !name) {
            return res.status(400).json({ error: 'Minden mezőt ki kell tölteni!' })
        }
        if (ertekeles < 1 || ertekeles > 5){
            return res.status(400).json({ error:'1 és 5 közötti számot válassz!' })
        }

        const insertId = await createErtekeles(ertekeles_szoveg, ertekeles, name)
        return res.status(201).json({ message: 'Az értékelésed rögzítve lett!', insertId })

    } catch (err) {
        return res.status(500).json({ error: 'Szerver oldali hiba', err })
    }
}

module.exports = {ertekelesek}