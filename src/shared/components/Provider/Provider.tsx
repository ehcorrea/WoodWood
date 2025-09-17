import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { THEME } from '../../constants/theme';

const queryClient = new QueryClient();

type ProviderProps = {
  children?: React.ReactElement;
};

export function Provider({ children }: ProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={THEME}>{children}</ThemeProvider>
    </QueryClientProvider>
  );
}
