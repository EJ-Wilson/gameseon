
import { hot } from 'react-hot-loader'
import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import { Home } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import {
  Link,
  useRouteMatch
} from 'react-router-dom'

import './Navigator.css'

const styles = theme => ({
  drawer: {
    width: theme.layout.drawerWidth
  },
  drawerPaper: {
    width: 'inherit',
    paddingTop: 64 // equal to AppBar height (on desktop)
  }
})

const PrimaryTypography = withStyles({
  root: {
    color: '#ffbe5d'
  }
})(Typography)

const Navigator = (props) => {
  Navigator.propTypes = {
    classes: PropTypes.any.isRequired,
    drawer: PropTypes.any.isRequired,
    drawerPaper: PropTypes.any.isRequired
  }
  const { classes } = props
  const match = useRouteMatch()

  const genKey = () => {
    return Date.now()
  }

  return (
    <Drawer
      variant='permanent'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>

        <ListItem>
          <PrimaryTypography variant='h4' component='h4'>
            Supporter
          </PrimaryTypography>
        </ListItem>

        <ListItem>
          <Link to={`${match.url}/projects`} key={genKey()} className='link'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText className='link'> Projects </ListItemText>
          </Link>
        </ListItem>

        <ListItem>
          <Link to={`${match.url}/analytics`} key={genKey()} className='link'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText className='link'> Analytics </ListItemText>
          </Link>
        </ListItem>

        <ListItem>
          <Link to={`${match.url}/newproject`} key={genKey()} className='link'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText className='link'> New Project </ListItemText>
          </Link>
        </ListItem>

      </List>
    </Drawer>
  )
}

export default withStyles(styles)(hot(module)(Navigator))
