const {insertTermekAllergen, findByAllergen } = require('../models/allegrenModel')
const {findByTermekId} = require('../models/termekekModel')


async function allergenAdd(req, res) {
    try {
        const { termek_id, allergen_id } = req.body;
        console.log(termek_id, allergen_id);

        if (!termek_id || !allergen_id) {
            return res.status(400).json({ 
                error: 'Minden mezőt ki kell tölteni!' 
            });
        }

        const termekTelezik = await findByTermekId(termek_id)
        
        if (!termekTelezik) {
            return res.status(401).json({ error: 'Ez a termék nem létezik' })
        }

        const allergenLetezik = await findByAllergen(termek_id, allergen_id)
        
        if (!allergenLetezik) {
            
        }

        if(allergen_id > 14 || allergen_id < 1){
            return res.status(400).json({ error:'1 és 14 közötti számot válassz!' })
        }
        
        const insertId = await insertTermekAllergen(termek_id, allergen_id);

        return res.status(201).json({ 
            message: 'Sikeresen hozzáadtál egy allergént!',
            insertId 
        });

    } catch (err) {
        console.log(err);
        if (err.code === 'ER_DUP_ENTRY'){
            return res.status(409).json({ error: 'Ez az allergén már hozzá van adva' })
        }
        return res.status(500).json({ 
            error: 'Szerver oldali hiba'
        });
    }
}

module.exports = {allergenAdd}