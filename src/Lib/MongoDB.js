// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')

// Connect to DB
function connect () {
  const dbName = 'supportr'
  const connectionString = 'mongodb+srv://SupportrAdmin:klxSyqlJRrhK1d70@supportrcluster0.fxt66.mongodb.net/' +
        dbName + '?retryWrites=true&w=majority'

  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Database connection successful')
    })
    .catch(err => {
      console.error('Database connection error')
      console.log(err)
    })
}

// Project Schema and functions
const projectSchema = require('./supportrSchema.js')
const Project = mongoose.model('Project', projectSchema)

function saveProject (projectInfo) {
  connect()

  // Check if project exists
  Project.findOne({ name: projectInfo.name }, 'name', function (err, project) {
    if (err) return err

    if (project != null) {
      // If it exists return and log
      console.log('Project already exists')
      return null
    } else {
      // Save Project
      const projectModel = new Project(projectInfo)
      projectModel.save(function (err, projectModel) {
        if (err) return console.error(err)
        console.log('%s added', projectModel.name)
        mongoose.disconnect()
      })
    }
  })
}

function findProjects () {
  connect()
  Project.find(function (err, projects) {
    if (err) return console.error(err)
    console.log(projects)

    mongoose.disconnect()
  })
}

saveProject({
  name: 'Detective Bot',
  release: new Date(2020, 5, 26), // May 26, 2020
  contributors: ['Something Something Games'],
  description: 'Detective Bot is a silly physics based detective game which you can play on your own or in co-op with up to 4 players. Solve quirky mysteries by investigating crime scenes, talking to weird characters and piecing together clues. Can you make Detective Bot the greatest detective who has ever lived?',
  posterURL: './urlyo',
  type: 'game'
})

export { findProjects, saveProject, connect }
