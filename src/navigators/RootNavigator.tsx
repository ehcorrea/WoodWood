import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CatalogoScreen from '../features/catalogo/CatalogoScreen';
import Header from '../features/header/Header';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }}>
        <Stack.Screen name="Home" component={CatalogoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
