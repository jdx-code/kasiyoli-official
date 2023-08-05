const User = require("../models/User")

module.exports = {
    getIndex: async (req, res) => {
        try{
            const users = await User.find()
            res.json(users)
        } catch(err){
            console.error(err)
        }
    }
}