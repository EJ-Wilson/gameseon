
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

import { Box } from '@material-ui/core'
import { withStyles, ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import muiTheme from '../../../Themes/muiTheme.js'

import './Form.css'

import FormObjects from './FormObjects/FormObjects.jsx'
const { TextEntry, FormButton, DropDownEntry, ImageUploader, FormStyles } = FormObjects

const styles = FormStyles

let didLoad = false
const Form = (props) => {
  Form.propTypes = {
    classes: PropTypes.any.isRequired,
    buttonBox: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
    url: PropTypes.string
  }

  const { classes } = props
  const onSubmit = (form) => {
    console.log(form)
    return true
  }

  const [form, setForm] = React.useState([])
  const [buttons, setButtons] = React.useState([])
  if (!didLoad) {
    const formItems = []
    const buttonItems = []
    didLoad = true
    testForm.forEach((el, index) => {
      const type = el.type
      switch (type) {
        case 'TextEntry':
          formItems.push(<TextEntry key={index} regex={el.regex} errorText={el.errorText} label={el.label} defaultValue={el.defaultValue} />)
          break
        case 'DropDownEntry':
          formItems.push(<DropDownEntry key={index} label={el.label} options={el.options} />)
          break
        case 'ImageUploader':
          formItems.push(<ImageUploader key={index} label={el.label} onDataChange={el.handleOnDataChange} data={el.data} />)
          break
        case 'FormButton':
          buttonItems.push(<FormButton key={index} buttonText={el.buttonText} click={el.click} />)
          break
        default:
          break
      }
    })
    setForm(formItems)
    setButtons(buttonItems)
  }

  return (
    <div className='Form'>

      <MuiThemeProvider theme={muiTheme}>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          flexDirection='column'
          width='50%'
          margin='auto'
          className='formBox'
        >

          <form onSubmit={onSubmit} className={classes.form} action={props.url} method='form'>

            {form}

            <Box className={classes.buttonBox}>
              {buttons}
            </Box>

          </form>
        </Box>
      </MuiThemeProvider>
    </div>
  )
}

export default withStyles(styles)(hot(module)(Form))

const testForm = [
  {
    type: 'TextEntry',
    regex: /\.*/,
    errorText: 'Big Error',
    label: 'Test Entry'
  },
  {
    type: 'FormButton',
    buttonText: 'Test'
  },
  {
    type: 'DropDownEntry',
    label: 'Drop Down Test',
    options: [
      { value: 'Option1', label: 'label' }
    ]
  },
  {
    type: 'ImageUploader',
    label: 'Please upload a project poster. Poster size should be *** x *** *',
    handleOnDataChange: () => { console.log('Change') },
    data: {}
  }
]
