import '@testing-library/jest-native';
import { mockedNavigation } from '../src/test/__mocks__';

jest.mock('@react-navigation/native', () => {
  const navigation = jest.requireActual('@react-navigation/native');
  return {
    ...navigation,
    useNavigation: jest.fn(() => mockedNavigation),
  };
});
