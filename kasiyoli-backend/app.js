const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const adminRoutes = require('./routes/admin')
const cors = require('cors')


const app = express()

require('dotenv').config({ path: './config/.env' })

connectDB()

app.set('view engine', 'ejs')

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())

app.use('/', homeRoutes)
app.use('/admin', adminRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})