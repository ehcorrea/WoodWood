import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  render as renderUI,
  RenderAPI,
  RenderOptions,
} from '@testing-library/react-native';

import { THEME } from '@/shared/constants/theme';
import { storeResetFns } from './__mocks__';

QueryClient.prototype.prefetchQuery = jest.fn();
QueryClient.prototype.invalidateQueries = jest.fn();
QueryClient.prototype.removeQueries = jest.fn();

export { renderHook } from '@testing-library/react-native';
export * from './__mocks__';

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

export function sleep(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

beforeEach(() => {
  jest.clearAllMocks();
  storeResetFns.forEach((resetFn) => {
    resetFn();
  });
});

afterEach(() => {
  queryClient.clear();
});
