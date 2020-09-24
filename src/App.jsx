import { hot } from 'react-hot-loader'
import React from 'react'
import Helmet from 'react-helmet'

// import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
// import muiTheme from './Themes/muiTheme.js'

import './App.css'
import './fonts.css'
import Home from './Components/Home/Home.jsx'
// import Backend from './Components/Backend/Backend.jsx'

const App = () => {
  return (
    <div className='App'>

      <Helmet>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
      </Helmet>

      {/* <MuiThemeProvider theme={muiTheme}>
        <Backend />
      </MuiThemeProvider> */}

      <Home />
    </div>
  )
}

export default hot(module)(App)
