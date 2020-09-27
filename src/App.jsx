import { hot } from 'react-hot-loader'
import React from 'react'
import Helmet from 'react-helmet'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import './App.css'
import './fonts.css'
import Home from './Components/FrontendComponents/Home/Home.jsx'
import Backend from './Components/BackendComponents/Backend.jsx'

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

      <Router>

        <Switch>
          <Route path='/partner' component={Backend} />
          <Route path='/' component={Home} />
        </Switch>

      </Router>

    </div>
  )
}

export default hot(module)(App)
