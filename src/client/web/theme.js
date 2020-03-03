import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
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
