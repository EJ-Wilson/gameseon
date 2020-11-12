
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import { TextField, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './FormStyles.jsx'

const DropDownEntry = (props) => {
  DropDownEntry.propTypes = {
    // Style props
    classes: PropTypes.object.isRequired,
    formInput: PropTypes.object.isRequired,
    // Input props
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string)
  }

  const { classes } = props

  return (
    <TextField
      select
      label={props.label}
      className={classes.formInput}
      defaultValue={props.defaultValue}
      variant='outlined'
      fullWidth
    >
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default withStyles(styles)(hot(module)(DropDownEntry))
