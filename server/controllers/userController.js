require("dotenv").config()
const Users = require("../models/User")
const bcrypt = require("bcrypt")

async function addUser(req, res, next) {
    try {
        const {first_name, last_name, dob, phone, username, password} = req.body
        if (!first_name || !last_name || !dob || !phone || !username || !password) {
            return res.status("401").json({message: "all fields are required"})
        } else {
            const duplicate = await Users.getByUsername(username)
            if (duplicate) res.status(400).json({message: "username already exists!"})
            const hash = await bcrypt.hash(password, 10)
            const user = await Users.insertUser({...req.body, password: hash})
            if (user) {
                res.status(201).json({message: "user created"})
            }
    }
    } catch (err) {
        next(err)
    }
}


module.exports = {
    addUser
}