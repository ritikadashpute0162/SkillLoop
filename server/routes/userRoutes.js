const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

const router = express.Router()

router.post("/register", async (req, res) => {

  try {

   const hashedPassword = await bcrypt.hash(req.body.password, 10)

const user = new User({
  ...req.body,
  password: hashedPassword
})

await user.save()

    res.status(201).json({
      message: "User registered successfully",
      user: user
    })

  } catch (error) {

    res.status(500).json({
      message: "Registration failed",
      error: error.message
    })

  }

})

module.exports = router

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid password"
      })
    }

    const token = jwt.sign(
  { userId: user._id },
  "skillloop_secret_key",
  { expiresIn: "1d" }
)

res.json({
  message: "Login successful",
  token: token,
  user: user
})

  } catch (error) {

    res.status(500).json({
      message: "Login failed",
      error: error.message
    })

  }

})