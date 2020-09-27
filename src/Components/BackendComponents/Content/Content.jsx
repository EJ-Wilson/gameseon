
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import './Content.css'

const Content = (props) => {
  Content.propTypes = {
    page: PropTypes.any.isRequired
  }

  return (
    <div className='Content'>

      {props.page}

    </div>
  )
}

export default (hot(module)(Content))
