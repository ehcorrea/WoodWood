import { View as MockedView } from 'react-native';

import { ProdutoDoCarrinho } from '@/shared/types';
import {
  criarMockProdutoDoCarrinho,
  mockedCarrinhoStore,
} from '@/shared/__mocks__';

import { render } from '@/test/utils';

import CarrinhoScreen from './CarrinhoScreen';

jest.mock('./components', () => ({
  CarrinhoVazio: () => <MockedView testID="carrinhoVazio" />,
  CardProduto: () => <MockedView testID="cardProduto" />,
}));

const mockedProduto = criarMockProdutoDoCarrinho({
  quantidade: 3,
  total: 300,
  price: 100,
});

const setup = (produtos: ProdutoDoCarrinho | undefined, total = 300) => {
  mockedCarrinhoStore({
    produtos: {
      [mockedProduto.id]: produtos,
      23: undefined,
    },
    total,
  });
  return render(<CarrinhoScreen />);
};

describe('<CarrinhoScreen/>', () => {
  describe('quando renderizado', () => {
    test('e possui algum produto no carrinho', () => {
      const container = setup(mockedProduto);
      expect(container.getAllByTestId('cardProduto').length).toBe(1);
      expect(container.getByText('Total: R$ 300.00')).toBeTruthy();
      expect(container.queryByTestId('carrinhoVazio')).toBeFalsy();
      expect(container).toMatchSnapshot();
    });
    test('e não possui nenhum produto no carrinho', () => {
      const container = setup(undefined, 0);
      expect(container.queryAllByTestId('cardProduto').length).toBe(0);
      expect(container.queryByText('Total: R$ 0.00')).toBeNull();
      expect(container.getByTestId('carrinhoVazio')).toBeTruthy();
      expect(container).toMatchSnapshot();
    });
  });
});
