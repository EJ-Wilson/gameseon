
import { hot } from 'react-hot-loader'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './PosterRow.css'
import Poster from '../Poster/Poster.jsx'

const PosterRow = (props) => {
  PosterRow.propTypes = {
    projectClick: PropTypes.any.isRequired,
    projects: PropTypes.any.isRequired
  }

  // On intial component load
  var posters = []
  for (var i = 0; i < props.projects.length; i++) {
    posters.push(<Poster key={i} projectClick={props.projectClick} project={props.projects[i]} />)
  }

  useEffect(() => {
    var posters = []
    for (var i = 0; i < props.projects.length; i++) {
      posters.push(<Poster key={i} projectClick={props.projectClick} project={props.projects[i]} />)
    }
  }, [props.projects, props.projectClick, posters])

  return (
    <div className='PosterRow'>
      {posters}
    </div>
  )
}

export default hot(module)(PosterRow)
