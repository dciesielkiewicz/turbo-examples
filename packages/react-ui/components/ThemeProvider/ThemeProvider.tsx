import { ReactNode } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material'

import { theme } from './theme';

interface IThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: IThemeProviderProps) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <>{children}</>
  </MuiThemeProvider>
);
