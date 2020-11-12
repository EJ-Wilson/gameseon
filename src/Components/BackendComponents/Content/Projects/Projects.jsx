import { hot } from 'react-hot-loader'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Button, Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import $ from 'jquery'

import './Project.css'
import PosterRow from '../../../FrontendComponents/PosterRow/PosterRow.jsx'

let onload = false

const styles = theme => ({
  buttonBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '25px'
  }
})

const Projects = (props) => {
  Projects.propTypes = {
    classes: PropTypes.any.isRequired,
    editProject: PropTypes.any.isRequired,
    buttonBox: PropTypes.any.isRequired,
    newProj: PropTypes.any.isRequired
  }

  const { classes } = props

  const [posters, setPosters] = React.useState([])

  const editProject = (proj) => {
    props.editProject(proj)
  }

  useEffect(() => {
    if (!onload || posters.length === 0) {
      $.get('/projects.data', function (data, status) {
        setPosters(data)
      })
      onload = true
    }
  })

  return (
    <div className='Home'>
      <Box className={classes.buttonBox}>
        <Button variant='contained' color='primary' onClick={() => { props.newProj() }}>
          New Project
        </Button>
      </Box>
      <PosterRow projects={posters} projectClick={editProject} />
    </div>
  )
}

export default withStyles(styles)(hot(module)(Projects))
