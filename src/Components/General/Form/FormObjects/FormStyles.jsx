const styles = theme => ({
  root: { // Base styles
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
  label: {
    color: 'rgb(118, 118, 118)'
  },
  title: {
    color: theme.palette.text.primary
  },
  buttonBox: { // Custom styles
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
  }
})

export default styles
