
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import { TextField } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './FormStyles.jsx'

const TextEntry = (props) => {
  TextEntry.propTypes = {
    classes: PropTypes.object.isRequired,
    formInput: PropTypes.object.isRequired,
    regex: PropTypes.instaceOf(RegExp),
    errorText: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.string
  }

  const { classes } = props

  // Entry error handling
  const [errorText, setErrorText] = React.useState('') // Text to display on invalid text (React State)
  const [error, setError] = React.useState(false) // Boolean to show error
  const checkEntry = (event) => { // Check entry
    var entryText = event.target.value
    var res = props.regex.exec(entryText) // Test regex
    if (res == null) {
      setError(true)
      setErrorText(props.errorText)
    } else {
      setError(true)
      setErrorText('')
    }
  }

  return (
    <TextField
      error={error}
      label={props.label}
      className={classes.formInput}
      onChange={checkEntry}
      defaultValue={props.defaultValue}
      variant='outlined'
      fullWidth
      helperText={errorText}
    />
  )
}

export default withStyles(styles)(hot(module)(TextEntry))
