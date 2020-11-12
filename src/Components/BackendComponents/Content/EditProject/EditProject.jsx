import { hot } from 'react-hot-loader'
import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'

import { useHistory } from 'react-router-dom'
import { Button, Box, TextField, MenuItem, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './EditProject.css'
import { ProjectTypes, maxNameLength } from '../../../../Assets/ProjectFormData.js'
import ImageUploader from '../../../General/Form/FormObjects/ImageUploader/ImageUploader.jsx'

const styles = theme => ({
  root: {
    background: 'black'
  },
  input: {
    display: 'none'
  },
  fileInput: {
    colour: 'primary'
  },
  paper: {
    background: '#18202c'
  },
  buttonBox: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: '25px'
  },
  form: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formInput: {
    margin: '10px'
  },
  button: {
    margin: '5px'
  },
  label: {
    color: 'rgb(118, 118, 118)'

  },
  title: {
    color: theme.palette.text.primary
  }
})

const PrimaryTypography = withStyles({
  root: {
    color: '#ffbe5d'
  }
})(Typography)

const EditProject = (props) => {
  EditProject.propTypes = {
    classes: PropTypes.any.isRequired,
    buttonBox: PropTypes.any.isRequired,
    form: PropTypes.any.isRequired,
    formInput: PropTypes.any.isRequired,
    button: PropTypes.any.isRequired,
    projectinfo: PropTypes.any.isRequired,
    parentPath: PropTypes.any.isRequired
  }

  const { classes } = props
  const [nameValid, setNameValidity] = React.useState(false)
  const [nameHelper, setNameHelper] = React.useState('')

  var textDate = props.projectinfo.projRelease.slice(0, 10)

  const history = useHistory()
  const handleOnClick = useCallback(() => history.push(`${props.parentPath}/projects`), [history])

  const submitForm = () => {
    formData.projPublished = true
    $.ajax({
      url: '/submitproject',
      type: 'POST',
      data: formData,
      success: function (data) {
        console.log('Success')
      },
      dataType: 'json'
    })
  }

  if (Object.entries(props.projectinfo).length === 0) {
    handleOnClick()
  }

  // React state for form data
  const [formData, setFormData] = React.useState({
    projName: '',
    projType: 'Game',
    projDesc: '',
    projRelease: textDate,
    projContributors: '',
    projPoster: ''
  })

  // Handlers for each of the form properties
  const handleProjName = (event) => {
    setFormData(Object.assign(formData, { projName: event.target.value }))
    if (formData.projName.length < maxNameLength) {
      setNameValidity(false)
      setNameHelper('')
    } else {
      setNameValidity(true)
      setNameHelper('Name too long. Max characters ' + maxNameLength + '.')
    }
  }

  const handleProjType = (event) => {
    setFormData(Object.assign(formData, { projType: event.target.value }))
  }

  const handleProjDesc = (event) => {
    setFormData(Object.assign(formData, { projDesc: event.target.value }))
  }

  const handleProjRelease = (event) => {
    setFormData(Object.assign(formData, { projRelease: event.target.value }))
  }

  const handleProjContributors = (event) => {
    setFormData(Object.assign(formData, { projContributors: event.target.value }))
  }

  return (
    <div className='project'>

      <Box
        display='flex'
        alignItems='center'
        justifyContent='center'
        flexDirection='column'
        width='50%'
        margin='auto'
        className='formBox'
      >

        <PrimaryTypography variant='h3' component='h3'>
          Edit Project
        </PrimaryTypography>

        <form noValidate autoComplete='off' className={classes.form}>

          <TextField
            error={nameValid}
            label='Project Name'
            className={classes.formInput}
            onChange={handleProjName}
            defaultValue={props.projectinfo.projName}
            variant='outlined'
            fullWidth
            helperText={nameHelper}
          />

          <TextField
            select
            label='Project Type'
            defaultValue={props.projectinfo.projType}
            onChange={handleProjType}
            className={classes.formInput}
            variant='outlined'
            fullWidth
          >
            {ProjectTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label='Project Description'
            className={classes.formInput}
            variant='outlined'
            defaultValue={props.projectinfo.projDesc}
            onChange={handleProjDesc}
            multiline
            fullWidth
          />

          <TextField
            id='date'
            label='Release Date'
            type='date'
            defaultValue={textDate}
            onChange={handleProjRelease}
            variant='outlined'
            className={classes.formInput}
            fullWidth
          />

          <TextField
            label='Contributors'
            className={classes.formInput}
            variant='outlined'
            defaultValue={props.projectinfo.projContributors}
            onChange={handleProjContributors}
            fullWidth
            helperText='Please add any contributors. Seperate contributors with a comma'
          />

          <Box className={classes.buttonBox}>
            <img src={props.projectinfo.projPoster} alt={props.projectinfo.projName} />
          </Box>

          <ImageUploader data={formData} onDataChange={setFormData} />

          <Box
            className={classes.buttonBox}
          >
            <Button className={classes.button} variant='contained' color='primary' onClick={() => submitForm()}>
              Save
            </Button>
            <Button className={classes.button} variant='contained' color='primary' onClick={() => {}}>
              Preview
            </Button>
          </Box>

        </form>
      </Box>
    </div>
  )
}

export default withStyles(styles)(hot(module)(EditProject))
