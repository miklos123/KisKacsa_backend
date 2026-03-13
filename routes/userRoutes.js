const express = require('express')
const { register, login, whoAmI, logout } = require('../controllers/userController')
const { hirlevel } = require('../controllers/hirlevelController')
const { ertekelesek } = require('../controllers/ertekelesekController')
const { termekek, getEtel, getItal, getDesszert } = require('../controllers/termekekController')
const { allergenAdd } = require('../controllers/allegrenController')
const { auth } = require('../middleware/userMiddleware')
const upload = require('../middleware/upload')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/whoami', auth, whoAmI)
router.post('/logout', logout)
router.post('/hirlevel', hirlevel)
router.post('/ertekelesek', ertekelesek)
router.post('/termekek', upload.single('kep'), termekek)
router.post('/addallergen', allergenAdd)
router.get('/etelek', getEtel)
router.get('/italok', getItal)
router.get('/desszertek', getDesszert)


module.exports = router