const multer = require('multer')
const path = require('path')

const MAX_FILE_SIZE = 1024 * 1024 * 10 // 10MB

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: MAX_FILE_SIZE },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpg|jpeg|png|gif|svg|webp|avif|bmp|tiff/
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase())
        const mimeType = fileTypes.test(file.mimetype)
        
        if (extName && mimeType) {
            return cb(null, true)
        } else {
            return cb(new Error('Csak képformátumok megengedettek'), null)
        }
    }
})

module.exports = upload