import { render } from '../../../test/utils';
import { Text, TextProps } from './Text';

const MOCKED_TEXT = 'Mocked Text';

const setup = (props?: TextProps) => {
  const container = render(<Text {...props}>{MOCKED_TEXT}</Text>);
  const text = container.getByText(MOCKED_TEXT);
  return { text, container };
};

describe('<Text/>', () => {
  describe('quando default redenrizado', () => {
    test('sem props customizadas', () => {
      const { container } = setup();
      expect(container).toMatchSnapshot();
    });
    test('com customSize', () => {
      const { text, container } = setup({ customSize: 30 });
      expect(text).toHaveStyle({ fontSize: 21.5 });
      expect(container).toMatchSnapshot();
    });
    test('com height', () => {
      const { text, container } = setup({ height: 30 });
      expect(text).toHaveStyle({ lineHeight: 25.5 });
      expect(container).toMatchSnapshot();
    });
  });
  test('quando Title renderizado', () => {
    const container = render(<Text.Title>{MOCKED_TEXT}</Text.Title>);
    expect(container.getByText(MOCKED_TEXT)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
  test('quando Subtitle renderizado', () => {
    const container = render(<Text.Subtitle>{MOCKED_TEXT}</Text.Subtitle>);
    expect(container.getByText(MOCKED_TEXT)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
