import { SnackbarProvider } from 'notistack';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { AllTheProviders } from 'react-test';
import {
  renderHook as testingLibraryRenderHook,
  render as testingLibraryRender,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
} from '@testing-library/react';

interface IWrapperProps {
  children: ReactNode;
}

export const Wrapper = ({ children }: IWrapperProps) => (
  <AllTheProviders>
    <SnackbarProvider>
      {children}
    </SnackbarProvider>
  </AllTheProviders>
);

export const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => testingLibraryRender(ui, { wrapper: Wrapper, ...options });

export const renderHook = <Result, Props>(
  render: (initialProps: Props) => Result,
  options?: RenderHookOptions<Props>,
): RenderHookResult<Result, Props> => testingLibraryRenderHook(
  render,
  { wrapper: Wrapper, ...options }
);
