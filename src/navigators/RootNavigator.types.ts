import { Produto } from '@/services/api';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type NavigationParamList = {
  CatalogoScreen: undefined;
  CarrinhoScreen: undefined;
  DetalhesScreen:
    | { produto: Produto; id?: string }
    | { produto?: undefined; id: string };
};

export type ScreenName = keyof NavigationParamList;

export type NavigationScreenProps<Screen extends ScreenName> = StackScreenProps<
  NavigationParamList,
  Screen
>;

export type NavigationForScreen<Screen extends ScreenName> =
  StackNavigationProp<NavigationParamList, Screen>;
