import { createTheme, Theme } from '@mui/material';
import { blue, grey, red, pink } from '@mui/material/colors';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

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
