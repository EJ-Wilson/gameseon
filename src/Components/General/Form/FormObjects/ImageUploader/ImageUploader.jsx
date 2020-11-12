
import { hot } from 'react-hot-loader'
import React from 'react'
import PropTypes from 'prop-types'

// Import React FilePond
import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'

// Import the Image EXIF Orientation, Rename and Image Preview plugins
import FilePondPluginFileRename from 'filepond-plugin-file-rename'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './ImageUploader.css'
import styles from '../FormStyles.jsx'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileRename)

const ImageUploader = (props) => {
  ImageUploader.propTypes = {
    classes: PropTypes.any.isRequired,
    data: PropTypes.any.isRequired,
    onDataChange: PropTypes.any.isRequired,
    label: PropTypes.string
  }

  const { classes } = props
  const [files, setFiles] = React.useState([])

  const renameFunc = (file) => {
    return props.data.projName + `${file.extension}`
  }

  function uploadComplete (res) {
    var newData = props.data
    newData.projPoster = JSON.parse(res).data.path
    props.onDataChange(newData)
  }

  return (
    <div className='ImageUploader'>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        fileRenameFunction={renameFunc}
        allowMultiple={false}
        allowFileRename
        maxFiles={3}
        server={{
          process: {
            url: '/uploadimage',
            ondata: (formData) => {
              formData.append('username', 'user')
              formData.append('project', props.data.projName)
              formData.append('imgSlot', 'poster')
              return formData
            },
            onload: (res) => { uploadComplete(res) }
          }
        }}
        dropOnPage
        dropValidation
        name='file' /* sets the file input name, it's filepond by default */
        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
      />
      <Typography className={classes.label} align='center'>
        {props.label}
        {/* Please upload a project poster. Poster size should be *** x *** */}
      </Typography>
    </div>
  )
}

export default withStyles(styles)(hot(module)(ImageUploader))
