import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    color: '#ffbe5d'
  },
  palette: {
    primary: {
      light: '#fff08d',
      main: '#ffbe5d',
      dark: '#c88e2d',
      contrastText: '#fff'
    },
    secondary: {
      light: '#595959',
      main: '#303030',
      dark: '#070707',
      contrastText: '#000'
    }
  },
  overrides: {
    MuiDrawer: {
      paper: {
        background: '#303030',
        color: '#ffffff'
      }
    }
  },
  props: {
    MuiSvgIcon: {
      htmlColor: '#fff'
    }
  },
  layout: {
    drawerWidth: 232
  }

})

export default theme
