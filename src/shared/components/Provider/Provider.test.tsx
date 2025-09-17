import { render } from '@testing-library/react-native';

import { THEME } from '../../constants/theme';
import { Text } from '../Text/Text';

import { Provider } from './Provider';

const MOCKED_TEXT = 'Mocked Text';

describe('<Provider/>', () => {
  describe('quando renderizado', () => {
    test('com children', () => {
      const { getByText, ...container } = render(
        <Provider>
          <Text>{MOCKED_TEXT}</Text>
        </Provider>
      );
      const text = getByText(MOCKED_TEXT);
      expect(text).toHaveStyle({ fontSize: Number(THEME.fonts.size.medium) });
      expect(container).toMatchSnapshot();
    });
    test('sem children', () => {
      const container = render(<Provider />);
      expect(container).toMatchSnapshot();
    });
  });
});
