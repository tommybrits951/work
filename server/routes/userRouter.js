const router = require("express").Router()
const controller = require("../controllers/userController")

router.route("/")
.post(controller.addUser)


module.exports = router