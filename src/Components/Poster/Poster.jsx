
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import './Poster.css'

const Poster = ({ openInfoscreen, game, source }) => {
  Poster.propTypes = {
    openInfoscreen: PropTypes.any.isRequired,
    game: PropTypes.string,
    source: PropTypes.string
  }

  return (
    <div className='Poster' onClick={() => openInfoscreen(game)}>
      <img src={source} alt={game} />
    </div>
  )
}

export default hot(module)(Poster)
