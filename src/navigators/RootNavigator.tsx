import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <Header />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="CatalogoScreen" component={CatalogoScreen} />
          <Stack.Screen name="DetalhesScreen" component={DetalhesScreen} />
          <Stack.Screen name="CarrinhoScreen" component={CarrinhoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Navigation;
