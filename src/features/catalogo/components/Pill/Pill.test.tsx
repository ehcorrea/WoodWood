import { render } from '@/test/utils';
import { Pill } from './Pill';
import { THEME } from '@/shared/constants/theme';

const setup = (categoriaSelecionada = 'category') => {
  const container = render(
    <Pill categoriaSelecionada={categoriaSelecionada} label="category" />
  );
  const wrapper = container.getByTestId('wraper-pill');
  const text = container.getByText('category');

  return { container, wrapper, text };
};

describe('<Pill/>', () => {
  describe('quando renderizado', () => {
    test('e props categoriaSelecionada igual a label', () => {
      const { wrapper, text, container } = setup();
      expect(wrapper).toHaveStyle({
        backgroundColor: THEME.colors.primary.main,
      });
      expect(text).toHaveStyle({
        color: THEME.colors.white.main,
      });
      expect(container).toMatchSnapshot();
    });
    test('e props categoriaSelecionada diferente da label', () => {
      const { wrapper, text, container } = setup('category-2');
      expect(wrapper).toHaveStyle({
        backgroundColor: THEME.colors.primary[50],
      });
      expect(text).toHaveStyle({
        color: THEME.colors.black.main,
      });
      expect(container).toMatchSnapshot();
    });
  });
});
