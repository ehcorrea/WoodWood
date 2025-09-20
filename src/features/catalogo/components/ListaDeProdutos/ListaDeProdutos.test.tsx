import { View as MockedView } from 'react-native';
import { fireEvent } from '@testing-library/react-native';

import { render, mockedNavigation } from '@/test/utils';
import { criarMockProduto } from '@/shared/__mocks__';

import { mockedCatalagoStore } from '../../__mocks__/store';

import { ListaDeProdutos } from './ListaDeProdutos';

jest.mock('../CardProduto/CardProduto', () => ({
  CardProduto: () => <MockedView testID="cardproduto" />,
}));

const produtos = {
  ['categoria-A']: criarMockProduto({ category: 'categoria-A' }),
  ['categoria-B']: criarMockProduto({ category: 'categoria-B', id: 1 }),
};

const setup = (categoriaSelecionada?: string) => {
  mockedCatalagoStore({
    categoriaSelecionada,
    produtos: {
      ['categoria-A']: [produtos['categoria-A']],
      ['categoria-B']: [produtos['categoria-B']],
    },
  });
  return render(<ListaDeProdutos />);
};

describe('<ListaDeProdutos/>', () => {
  describe('quando renderizado', () => {
    test('e categoriaSelecionada igual a "undefined"', () => {
      const container = setup();
      const items = container.getAllByLabelText(
        'Ver detalhes sobre mocked-title'
      );
      expect(items.length).toBe(2);
    });
    test('e categoriaSelecionada igual a "categoria-A"', () => {
      const container = setup('categoria-A');
      const items = container.getAllByLabelText(
        'Ver detalhes sobre mocked-title'
      );
      expect(items.length).toBe(1);
    });
    test('e algum item é pressionado', () => {
      const container = setup();
      const [itemA, itemB] = container.getAllByLabelText(
        'Ver detalhes sobre mocked-title'
      );
      fireEvent.press(itemA);
      expect(mockedNavigation.navigate).toHaveBeenCalledWith('DetalhesScreen', {
        id: produtos['categoria-A'].id,
      });
      fireEvent.press(itemB);
      expect(mockedNavigation.navigate).toHaveBeenCalledWith('DetalhesScreen', {
        id: produtos['categoria-B'].id,
      });
    });
  });
});
