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
};

const adicionarProduto = jest.fn();

const setup = ({ id, produto }: SetupArgs) => {
  mockedCarrinhoStore({ adicionarProduto });
  jest.spyOn(navigation, 'useRoute').mockReturnValueOnce({
    params: { id },
    key: 'detalhes-screen',
    name: 'DetalhesScreen',
  });
  jest
    .spyOn(useDetalhesProduto, 'useDetalhesProduto')
    .mockReturnValueOnce({ produto: produto, isLoading: false });
  return render(<DetalhesScreen />);
};

describe('<DetalhesScreen/>', () => {
  describe('quando renderizado', () => {
    describe('e pressionado "Adicionar ao carrinho"', () => {
      test('com produto', () => {
        const produto = criarMockProduto();
        const container = setup({ id: produto.id, produto });
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
