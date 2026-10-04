const mongoose = require("mongoose")

const skillRequestSchema = new mongoose.Schema({

  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  skill: {
    type: String,
    required: true
  },

  status: {
    type: String,
    default: "Pending"
  }

})

module.exports = mongoose.model(
  "SkillRequest",
  skillRequestSchema
)