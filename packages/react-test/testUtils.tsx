import { ReactElement, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import {
  render as testingLibraryRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react';

const theme = createTheme();

interface IAllTheProvidersProps {
  children: ReactNode;
}

export const AllTheProviders = ({ children }: IAllTheProvidersProps) => (
  <MemoryRouter>
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </MemoryRouter>
);

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
): RenderResult => testingLibraryRender(ui, { wrapper: AllTheProviders, ...options });
