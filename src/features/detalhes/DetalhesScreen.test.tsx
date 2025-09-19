import { fireEvent } from '@testing-library/react-native';
import * as navigation from '@react-navigation/native';

import { render } from '@/test/utils';
import { criarMockProduto, mockedCarrinhoStore } from '@/test/__mocks__/';
import { Produto } from '@/services/api';

import * as useDetalhesProduto from './hooks/useDetalhesProduto/useDetalhesProduto';

import DetalhesScreen from './DetalhesScreen';

type SetupArgs = {
  id: number;
  produto?: Produto;
  isLoading?: boolean;
};

const adicionarProduto = jest.fn();

const setup = ({ id, produto, isLoading = false }: SetupArgs) => {
  mockedCarrinhoStore({ adicionarProduto });
  jest.spyOn(navigation, 'useRoute').mockReturnValueOnce({
    params: { id },
    key: 'detalhes-screen',
    name: 'DetalhesScreen',
  });
  jest
    .spyOn(useDetalhesProduto, 'useDetalhesProduto')
    .mockReturnValueOnce({ produto: produto, isLoading });
  return render(<DetalhesScreen />);
};

describe('<DetalhesScreen/>', () => {
  describe('quando renderizado', () => {
    test('e em loading', () => {
      const container = setup({ id: 1, isLoading: true });
      expect(container.getByTestId('loading')).toBeTruthy();
      expect(container.queryByText('Adicionar ao carrinho')).toBeFalsy();
    });
    describe('e fora de loading', () => {
      describe('e pressionado "Adicionar ao carrinho"', () => {
        test('com produto', () => {
          const produto = criarMockProduto();
          const container = setup({ id: produto.id, produto });
          expect(container.queryByTestId('loading')).toBeFalsy();
          const adicionarAoCarrinho = container.getByText(
            'Adicionar ao carrinho'
          );
          expect(useDetalhesProduto.useDetalhesProduto).toHaveBeenCalledWith({
            id: produto.id,
          });
          fireEvent.press(adicionarAoCarrinho);
          expect(adicionarProduto).toHaveBeenCalledWith({
            id: produto.id,
            image: produto.image,
            price: produto.price,
            title: produto.title,
          });
        });
        test('sem produto', () => {
          const produto = criarMockProduto();
          const container = setup({ id: produto.id });
          expect(useDetalhesProduto.useDetalhesProduto).toHaveBeenCalledWith({
            id: 0,
          });
          expect(container.queryByText('Adicionar ao carrinho')).toBeFalsy();
        });
      });
    });
  });
});
