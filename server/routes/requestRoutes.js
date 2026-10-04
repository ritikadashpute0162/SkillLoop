const express = require("express")
const SkillRequest = require("../models/SkillRequest")

const router = express.Router()

router.post("/", async (req, res) => {

  try {

    const request = new SkillRequest(req.body)

    await request.save()

    res.status(201).json({
      message: "Skill request sent",
      request: request
    })

  } catch (error) {

    res.status(500).json({
      message: "Request failed",
      error: error.message
    })

  }

})

router.get("/:userId", async (req, res) => {

  try {

    const requests = await SkillRequest.find({
      $or: [
        { sender: req.params.userId },
        { receiver: req.params.userId }
      ]
    })

    res.json(requests)

  } catch (error) {

    res.status(500).json({
      message: "Could not get requests"
    })

  }

})

module.exports = router