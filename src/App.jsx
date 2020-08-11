import { hot } from 'react-hot-loader'
import React from 'react'

import './App.css'
import './fonts.css';
import PosterRow from './Components/PosterRow/PosterRow.jsx'
import Topbar from './Components/Topbar/Topbar.jsx'

const App = () => (
  <div className='App'>
    <Topbar />
    <PosterRow />
  </div>
)

export default hot(module)(App)
