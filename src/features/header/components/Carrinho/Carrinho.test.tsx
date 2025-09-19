import { render } from '@/test/utils';
import { Carrinho } from './Carrinho';

const setup = (valor: number = 10) => {
  return render(<Carrinho valor={valor} />);
};

describe('<Carrinho/>', () => {
  describe('quando renderizado', () => {
    test('e possui valor menor que 99', () => {
      const container = setup();
      expect(container.getByText('10')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
    test('e possui valor maior que 99', () => {
      const container = setup(100);
      expect(container.getByText('+99')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
