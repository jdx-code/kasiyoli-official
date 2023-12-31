const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const url = process.env.MONGO_URL
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err){
        console.error(err)
        process.exit(1)
    }
}

module.exports = connectDB;