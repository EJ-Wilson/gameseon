
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import styles from './FormStyles.jsx'

const FormButton = (props) => {
  FormButton.propTypes = {
    // Style props
    classes: PropTypes.object.isRequired,
    // Input props
    buttonText: PropTypes.string,
    click: PropTypes.func.isRequired
  }

  const { classes } = props

  return (
    <Button className={classes.button} variant='contained' color='primary' onClick={() => props.click()}>
      {props.buttonText}
    </Button>
  )
}

export default withStyles(styles)(hot(module)(FormButton))
