import Navigation from '../navigators/RootNavigator';
import { Provider } from '../shared/components';

function App() {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
}

export default App;
