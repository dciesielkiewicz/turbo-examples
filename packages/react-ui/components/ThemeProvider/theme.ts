import { createTheme } from '@mui/material';
import { blue, grey, red, pink } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
    },
    secondary: {
      main: pink.A400,
    },
    text: {
      primary: grey[900]
    },
    error: {
      main: red.A400,
    },
  },
});
