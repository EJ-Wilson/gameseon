
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import Content from './Content/Content.jsx'
import Navigator from './Navigator/Navigator.jsx'
import { withStyles } from '@material-ui/core/styles'

import './Backend.css'

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    zIndex: 1,
    position: 'relative',
    overflow: 'hidden',
    margin: 0
  },
  appContent: theme.mixins.gutters({
    // https://github.com/philipwalton/flexbugs#flexbug-17
    flex: '1 1 100%',
    maxWidth: '100%',
    paddingTop: 80, // equal to AppBar height + 16px
    margin: '0 auto',
    // Set the max content width for each breakpoint
    // Content will be centered in the space to the right/left of drawer
    [theme.breakpoints.up('lg')]: {
      maxWidth: theme.breakpoints.values.lg
    }
  })
})

const Backend = (props) => {
  Backend.propTypes = {
    classes: PropTypes.any.isRequired,
    appContent: PropTypes.any.isRequired,
    root: PropTypes.any.isRequired
  }

  const { classes } = props

  return (
    <div className={classes.root}>
      <Navigator />
      <div className={classes.appContent}>
        <Content />
      </div>

    </div>
  )
}

export default withStyles(styles)(hot(module)(Backend))
