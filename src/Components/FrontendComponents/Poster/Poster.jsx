
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import './Poster.css'

const Poster = ({ projectClick, project }) => {
  Poster.propTypes = {
    projectClick: PropTypes.any.isRequired,
    project: PropTypes.any
  }

  return (
    <div className='Poster' onClick={() => projectClick(project)}>
      <img src={project.projPoster} alt={project.projName} />
    </div>
  )
}

export default hot(module)(Poster)
