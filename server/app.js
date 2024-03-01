require("dotenv").config()
const userRouter = require("./routes/userRouter")
const authRouter = require("./routes/authRouter")
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT
const cookieParser = require("cookie-parser")



app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/users", userRouter)
app.use("/auth", authRouter)



app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})