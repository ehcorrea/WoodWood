import { NavigationParamList } from '@/navigators/RootNavigator.types';

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface RootParamList extends NavigationParamList {}
  }
}
