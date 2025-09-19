import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CatalogoScreen from '../features/catalogo/CatalogoScreen';
import DetalhesScreen from '../features/detalhes/DetalhesScreen';
import CarrinhoScreen from '../features/carrinho/CarrinhoScreen';
import Header from '../features/header/Header';

import { NavigationParamList } from './RootNavigator.types';

const Stack = createStackNavigator<NavigationParamList>();

const linking = {
  prefixes: ['myapp://'],
  config: {
    screens: {
      DetalhesScreen: {
        path: 'produto/:id',
      },
    },
  },
};

function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator screenOptions={{ header: Header }}>
        <Stack.Screen name="CatalogoScreen" component={CatalogoScreen} />
        <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} />
        <Stack.Screen name="CarrinhoScreen" component={CarrinhoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
