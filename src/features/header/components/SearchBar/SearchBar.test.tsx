import { fireEvent } from '@testing-library/react-native';

import { render } from '../../../../test/utils';

import { SearchBar } from './SearchBar';

const setup = () => {
  const container = render(<SearchBar />);
  const searchBar = container.getByTestId('search-bar-wrapper');
  const input = container.getByPlaceholderText('Busque tudo para a sua casa');
  return { searchBar, input };
};

describe('<SearchBar/>', () => {
  describe('quando renderizado', () => {
    test('e recebe foco', () => {
      const { input, searchBar } = setup();
      expect(input.props.accessibilityState).toEqual({ selected: false });
      fireEvent.press(searchBar);
      expect(input.props.accessibilityState).toEqual({ selected: true });
    });
    test('e perde foco', () => {
      const { input, searchBar } = setup();
      fireEvent.press(searchBar);
      fireEvent(input, 'blur');
      expect(input.props.accessibilityState).toEqual({ selected: false });
    });
  });
});
