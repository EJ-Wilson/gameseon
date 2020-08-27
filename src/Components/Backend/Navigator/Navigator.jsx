
import { hot } from 'react-hot-loader'
import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton, Typography } from '@material-ui/core'
import { Home, Settings } from '@material-ui/icons'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

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

  return (

    <Drawer
      variant='permanent'
      className={classes.drawer}
      classes={{ paper: classes.drawerPaper }}
    >
      <List>

        <ListItem>
          <PrimaryTypography variant='h4' component='h4'>
            Supportr
          </PrimaryTypography>
        </ListItem>

        <ListItem>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText> Projects </ListItemText>
          <ListItemSecondaryAction>
            <IconButton disableRipple>
              <Settings />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>

      </List>
    </Drawer>
  )
}

export default withStyles(styles)(hot(module)(Navigator))
