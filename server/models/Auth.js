const db = require("../config/db-config")


async function getToken(id) {
    const token = await db("tokens").where("user_id", id).first()
    return token
}


async function postToken(obj) {
    const {user_id, token} = obj
    const duplicate = await db("tokens").where("user_id", user_id).first()
    if (duplicate) {
        await db('tokens').where("user_id", user_id).update({token: token})
    }
    return await db("tokens").where("user_id", user_id).select("token").first()
}


module.exports = {
    getToken,
    postToken
}