const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  college: {
    type: String,
    required: true
  },

  branch: {
    type: String,
    required: true
  },

  year: {
    type: String,
    required: true
  },

  teachSkills: {
    type: [String],
    default: []
  },

  learnSkills: {
    type: [String],
    default: []
  },

  xp: {
    type: Number,
    default: 0
  },

  level: {
    type: Number,
    default: 1
  }
})

module.exports = mongoose.model("User", userSchema)
