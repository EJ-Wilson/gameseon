const mongoose = require('mongoose')

const projectSchema = new mongoose.Schema({
  projName: String,
  projType: String,
  projDesc: String,
  projRelease: Date,
  projContributors: [String],
  projPoster: String,
  projPublished: Boolean,
  projOwner: String
})

// Schema Methods
projectSchema.methods.constructSchema = function (projectInfo) {
  const Project = mongoose.model('Project', projectSchema)
  return new Project(projectInfo)
}

module.exports = projectSchema
