import { hot } from 'react-hot-loader'
import React from 'react'

import './Title.css'

const message = 'Supportr.'
const Title = () => (
  <div className='Title'>
    <h1>{message}</h1>
  </div>
)

export default hot(module)(Title)
