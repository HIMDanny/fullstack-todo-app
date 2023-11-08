import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: 'rgb(168 85 247 / .8)',
      main: 'rgb(168 85 247 / .65)',
      dark: 'rgb(168 85 247 / .28)',
    },
    background: {
      paper: '#151515',
      default: 'rgb(0 0 0 / .96)',
    },
  },
});

export { theme };
