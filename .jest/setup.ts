import { Fragment as MockFragment } from 'react';
import { View as MockView } from 'react-native';

import '@testing-library/jest-native';
import { mockedNavigation } from '../src/test/__mocks__';

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return {
    ...navigation,
    useNavigation: jest.fn(() => mockedNavigation),
    useRoute: jest.fn(),
  };
});

jest.mock('react-native-safe-area-context', () => ({
  SafeAreaProvider: MockFragment,
  SafeAreaView: MockView,
  useSafeAreaInsets: () => ({
    bottom: 10,
  }),
}));
