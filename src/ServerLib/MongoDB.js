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

function submitProject (projectInfo) {
  connect()

  // Check if project exists
  Project.findOne({ projName: projectInfo.projName }, 'projName', function (err, project) {
    if (err) return err
    console.log(project)

    if (project != null) {
      // overwrite project
      projectInfo.projPublished = true
      Project.replaceOne({ projName: project.projName }, projectInfo, null, function (err, docs) {
        if (err) {
          console.log(err)
        } else {
          console.log('%s added', project.projName)
        }
      })
    } else {
      // Save Project
      projectInfo.projPublished = true
      const projectModel = new Project(projectInfo)
      projectModel.save(function (err, projectModel) {
        if (err) console.error(err)
        console.log('%s added', projectModel.projName)
        mongoose.disconnect()
      })
    }
  })
}

function saveProject (projectInfo) {
  connect()

  // Check if project exists
  Project.findOne({ projName: projectInfo.projName }, 'projName', function (err, project) {
    if (err) return err

    if (project != null) {
      // overwrite project
      console.log(project)
      projectInfo.projPublished = false
      Project.replaceOne({ projName: project.projName }, projectInfo, null, function (err, docs) {
        if (err) {
          console.log(err)
        } else {
          console.log('%s added', project.projName)
        }
      })
    } else {
      // Save Project
      projectInfo.projPublished = false
      const projectModel = new Project(projectInfo)
      projectModel.save(function (err, projectModel) {
        if (err) return console.error(err)
        console.log('%s added', projectModel.projName)
        mongoose.disconnect()
      })
    }
  })
}

async function findProjects (filter, callback) {
  connect()

  var projs = {}

  await Project.find(filter, function (err, projects) {
    if (err) return console.error(err)

    getData(projects)
    callback(projects)

    mongoose.disconnect()
  })

  function getData (data) {
    projs = data
  }

  return projs
}

/*
saveProject({
  name: 'Detective Bot',
  release: new Date(2020, 5, 26), // May 26, 2020
  contributors: ['Something Something Games'],
  description: 'Detective Bot is a silly physics based detective game which you can play on your own or in co-op with up to 4 players. Solve quirky mysteries by investigating crime scenes, talking to weird characters and piecing together clues. Can you make Detective Bot the greatest detective who has ever lived?',
  posterURL: './urlyo',
  type: 'game'
})
*/

module.exports = { findProjects, submitProject, saveProject }
