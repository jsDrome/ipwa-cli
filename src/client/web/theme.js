import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: green,
  },
  background: {
    primary: '#eceff1',
  },
  overrides: {
    MuiSvgIcon: {
      root: {
        color: '#ffffff',
      },
    },
    MuiButton: {
      root: {
        color: '#ffffff',
      },
    },
  },
});

export default theme;
