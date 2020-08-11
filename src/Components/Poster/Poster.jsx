
import { hot } from 'react-hot-loader'
import React from 'react'

import './Poster.css'

const Poster = ({game, source}) => (
  <div className='Poster'>
    <img src={source} alt={game}></img>
  </div>
)

export default hot(module)(Poster)
