import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';

export type NavigationParamList = {
  CatalogoScreen: undefined;
  CarrinhoScreen: undefined;
  DetalhesScreen: { id: number };
};

export type ScreenName = keyof NavigationParamList;

export type NavigationScreenProps<Screen extends ScreenName> = StackScreenProps<
  NavigationParamList,
  Screen
>;

export type NavigationForScreen<Screen extends ScreenName> =
  StackNavigationProp<NavigationParamList, Screen>;
