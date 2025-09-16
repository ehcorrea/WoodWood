import { ThemeProvider } from '@emotion/react';
import {
  render as renderUI,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';

import { THEME } from '../shared/constants/theme';

export const TestProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return <ThemeProvider theme={THEME}>{children}</ThemeProvider>;
};

export const render = (
  component: React.ReactElement,
  options?: RenderOptions
): RenderAPI => {
  return renderUI(component, {
    wrapper: TestProvider,
    ...options,
  });
};
