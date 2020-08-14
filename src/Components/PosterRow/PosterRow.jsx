
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import './PosterRow.css'
import Poster from '../Poster/Poster.jsx'

import EvePostPoster from '../../Content/Posters/EveningPostPoster.jpg'
import DetectiveBotPoster from '../../Content/Posters/DetectiveBotPoster.jpg'
import BunkerDwnPoster from '../../Content/Posters/BunkerDownPoster.jpg'

const PosterRow = (props) => {
  PosterRow.propTypes = {
    openInfoscreen: PropTypes.any.isRequired
  }

  return (
    <div className='PosterRow'>
      <Poster openInfoscreen={props.openInfoscreen} source={BunkerDwnPoster} game='Bunker Down' />
      <Poster openInfoscreen={props.openInfoscreen} source={DetectiveBotPoster} game='Detective Bot' />
      <Poster openInfoscreen={props.openInfoscreen} source={EvePostPoster} game='Evening Post' />
    </div>
  )
}

export default hot(module)(PosterRow)
