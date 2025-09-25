import { createTheme } from '@mui/material/styles';
import red from '@mui/material/colors/red';

// Create a theme instance.
const theme = createTheme({
  palette: {
    white: {
      color: '#FFFFFF',
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
  fontSize: '3em',

  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '5rem',
  },
};

export default theme;
