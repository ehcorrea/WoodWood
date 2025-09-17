import { ThemeProvider } from '@emotion/react';

import { THEME } from '../shared/constants/theme';
import Navigation from '../navigators/RootNavigator';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
