import { hot } from 'react-hot-loader'
import React from 'react'

import './App.css'
import './fonts.css'
import PosterRow from './Components/PosterRow/PosterRow.jsx'
import Topbar from './Components/Topbar/Topbar.jsx'
import Infoscreen from './Components/Infoscreen/Infoscreen.jsx'

const App = () => {
  const [screenVis, updateVis] = React.useState({ visibility: 'hidden' })
  const [projectID, updateProject] = React.useState('')

  const openInfoscreen = (game) => {
    updateVis({ visibility: 'visible' })
    updateProject(game)
  }

  const closeInfoscreen = () => {
    updateVis({ visibility: 'hidden' })
  }

  return (
    <div className='App'>
      <Topbar />
      <PosterRow openInfoscreen={openInfoscreen} />
      <Infoscreen style={screenVis} closeInfoscreen={closeInfoscreen} projectID={projectID} />
    </div>
  )
}

export default hot(module)(App)
