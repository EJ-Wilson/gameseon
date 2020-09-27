import { hot } from 'react-hot-loader'
import React from 'react'

import './Topbar.css'

import Title from '../Title/Title.jsx'

const Topbar = () => (
  <div className='Topbar'>
    <Title />
  </div>
)

export default hot(module)(Topbar)
