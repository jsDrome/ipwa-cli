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
  typography: {
    fontSize: 13,
    fontFamily: "Ubuntu, sans-serif, Verdana, 'Trebuchet MS', 'Tahoma'",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
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
