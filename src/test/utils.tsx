import { ThemeProvider } from '@emotion/react';
import {
  render as renderUI,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { THEME } from '../shared/constants/theme';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

export const TestProvider = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
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
