const express = require('express')

const app = express()

require('dotenv').config({ path: './config/.env' })

// Body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`)
})