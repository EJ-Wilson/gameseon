import { hot } from 'react-hot-loader'
import React from 'react'

import './Home.css'
import PosterRow from '../PosterRow/PosterRow.jsx'
import Topbar from '../Topbar/Topbar.jsx'
import Infoscreen from '../Infoscreen/Infoscreen.jsx'

const Home = () => {
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
    <div className='Home'>
      <Topbar />
      <PosterRow openInfoscreen={openInfoscreen} />
      <Infoscreen style={screenVis} closeInfoscreen={closeInfoscreen} projectID={projectID} />
    </div>
  )
}

export default hot(module)(Home)
