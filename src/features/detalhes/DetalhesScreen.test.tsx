import { fireEvent } from '@testing-library/react-native';
import * as navigation from '@react-navigation/native';

import { render } from '@/test/utils';
import { criarMockProduto, mockedCarrinhoStore } from '@/test/__mocks__/';

import * as useDetalhesProduto from './hooks/useDetalhesProduto/useDetalhesProduto';

import DetalhesScreen, { DetalheScreen } from './DetalhesScreen';

const adicionarProduto = jest.fn();

const setup = ({ id, produto }: DetalheScreen['params']) => {
  mockedCarrinhoStore({ adicionarProduto });
  jest.spyOn(navigation, 'useRoute').mockReturnValueOnce({
    params: { produto, id },
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
        const container = setup({ produto });
        const adicionarAoCarrinho = container.getByText(
          'Adicionar ao carrinho'
        );
        expect(useDetalhesProduto.useDetalhesProduto).toHaveBeenCalledWith({
          produto,
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
        const container = setup({ id: '1' });
        expect(useDetalhesProduto.useDetalhesProduto).toHaveBeenCalledWith({
          id: '1',
        });
        expect(container.queryByText('Adicionar ao carrinho')).toBeFalsy();
      });
    });
  });
});
