const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const cors = require('cors')

const app = express()

require('dotenv').config({ path: './config/.env' })

connectDB()

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use('/', homeRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})