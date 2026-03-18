const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')

const userRoutes = require('./routes/userRoutes')

const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cookieParser())

app.use('/users/', userRoutes)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

module.exports = app