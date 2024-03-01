const router = require("express").Router()
const controller = require("../controllers/authControlller")

router.route("/").post(controller.postToken).get(controller.getToken)


module.exports = router