const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const requestRoutes = require("./routes/requestRoutes")

const app = express()

connectDB()

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoutes)

app.use("/api/requests", requestRoutes)

app.get("/api/users/test", (req, res) => {
  res.json({
    message: "User routes are working"
  })
})

app.get("/", (req, res) => {
  res.send("SkillLoop Backend is running!")
})

app.get("/api/test", (req, res) => {
  res.json({
    message: "SkillLoop API is working",
    status: "success"
  })
})

const PORT = 5000

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})