import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CatalogoScreen from '../features/catalogo/CatalogoScreen';
import DetalhesScreen from '../features/detalhes/DetalhesScreen';
import Header from '../features/header/Header';

import { NavigationParamList } from './RootNavigator.types';

const Stack = createStackNavigator<NavigationParamList>();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ header: Header }}>
        <Stack.Screen name="CatalogoScreen" component={CatalogoScreen} />
        <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
