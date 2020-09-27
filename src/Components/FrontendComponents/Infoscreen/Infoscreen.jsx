
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import './Infoscreen.css'

const Infoscreen = (props) => {
  Infoscreen.propTypes = {
    style: PropTypes.object,
    closeInfoscreen: PropTypes.any.isRequired,
    projectID: PropTypes.string
  }

  return (
    <div className='Infoscreen' style={props.style}>
      <div className='InfoscreenBack' onClick={() => props.closeInfoscreen()} />
      <div className='InfoscreenFront'>
        {props.projectID}
      </div>
    </div>
  )
}

export default hot(module)(Infoscreen)
