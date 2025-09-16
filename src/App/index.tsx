import { ThemeProvider } from '@emotion/react';
import { NewAppScreen } from '@react-native/new-app-screen';

import { THEME } from '../shared/constants/theme';

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <NewAppScreen templateFileName="App.tsx" />
    </ThemeProvider>
  );
}

export default App;
