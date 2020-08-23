const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  name: String,
  release: Date,
  contributors: [String],
  description: String,
  posterURL: String,
  type: String
})

// Schema Methods
projectSchema.methods.displayImage = function () {
  console.log(this.posterURL)
}

module.exports = projectSchema
