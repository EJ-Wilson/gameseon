
import { hot } from 'react-hot-loader'
import React from 'react'

import './PosterRow.css'
import Poster from '../Poster/Poster.jsx';

import EvePostPoster from '../../Content/Posters/EveningPostPoster.jpg'
import DetectiveBotPoster from '../../Content/Posters/DetectiveBotPoster.jpg'
import BunkerDwnPoster from '../../Content/Posters/BunkerDownPoster.jpg'

const game = 'Gameseon'
const PosterRow = () => (
  <div className='PosterRow'>
    <Poster source={BunkerDwnPoster} game={"Bunker Down"}/>
    <Poster source={DetectiveBotPoster} game={"Detective Bot"}/>
    <Poster source={EvePostPoster} game={"Evening Post"} />
  </div>
)

export default hot(module)(PosterRow)