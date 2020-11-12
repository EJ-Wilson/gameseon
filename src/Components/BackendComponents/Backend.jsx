
import { hot } from 'react-hot-loader'
import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import {
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from 'react-router-dom'

import Content from './Content/Content.jsx'
import Navigator from './Navigator/Navigator.jsx'
import { withStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import muiTheme from '../../Themes/muiTheme.js'

import CreateProject from './Content/CreateProject/CreateProject.jsx'
import Projects from './Content/Projects/Projects.jsx'
import EditProject from './Content/EditProject/EditProject.jsx'

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

  const match = useRouteMatch()

  const [project, setProject] = React.useState({})
  const [openEdit, setOpenEdit] = React.useState(false)
  const openEditProject = (proj) => {
    setProject(proj)
    setOpenEdit(true)
  }

  const history = useHistory()
  const editProjectClick = useCallback(() => history.push(`${match.path}/editproject`), [history])
  const newProjectClick = useCallback(() => history.push(`${match.path}/newProject`), [history])

  useEffect(() => {
    if (openEdit) {
      editProjectClick()
    }
  }, [openEdit])

  return (
    <MuiThemeProvider theme={muiTheme}>
      <div className={classes.root}>
        <Navigator />

        <Switch>
          <Route path={`${match.path}/newproject`} component={Backend}>
            <div className={classes.appContent}>
              <Content page={<CreateProject />} />
            </div>
          </Route>
          <Route path={`${match.path}/projects`} component={Backend}>
            <div className={classes.appContent}>
              <Content page={<Projects editProject={openEditProject} newProj={newProjectClick} />} />
            </div>
          </Route>
          <Route path={`${match.path}/editproject`} component={Backend}>
            <Content page={<EditProject projectinfo={project} parentPath={match.path} />} />
          </Route>
        </Switch>

      </div>
    </MuiThemeProvider>
  )
}

export default withStyles(styles)(hot(module)(Backend))
