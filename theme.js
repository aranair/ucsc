import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    white: {
      main: 'white',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: [
      'Raleway'
    ].join(','),
    h3: {
      color: '#002846',
      lineHeight: '2em'
    }
  }
});

theme.typography.h1 = {
  fontSize: '2em',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

export default theme;
