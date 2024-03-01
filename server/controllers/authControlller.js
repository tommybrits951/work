const Auth = require("../models/Auth")


async function postToken(req, res, next) {
    try {
        const {user_id, token} = req.body
        const accessToken = await Auth.postToken({user_id, token})
        res.status(201).json(accessToken)
    } catch (err) {
        next(err)
    }
}

async function getToken(req, res, next) {
    try {
        const {user_id} = req.body
        const accessToken = await Auth.getToken(user_id)
        res.status(200).json(accessToken)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    postToken,
    getToken
}