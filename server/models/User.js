const db = require("../config/db-config")

async function getById(id) {
    const user = await db('users as u').leftJoin("roles as r", "r.id", "u.role_id").select("u.*", "r.role").where("u.id", id).first()
    return user
}

async function getAll() {
    const users = await db("users").leftJoin("roles", "users.role_id", "roles.id")
    return users
}
async function insertUser(user) {
    await db('users').insert(user)
    const newUser = await db("users").where("username", user.username).first()
    return newUser 
}

async function getByUsername(username) {
    const user = await db("users").where("username", username).first()
    return user
}
module.exports = {
    getById,
    getAll,
    insertUser,
    getByUsername
}