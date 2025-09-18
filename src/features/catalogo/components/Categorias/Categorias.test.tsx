import { mockedCatalagoStore } from '../../__mocks__/store';
import { View as MockedView } from 'react-native';
import { fireEvent } from '@testing-library/react-native';

import { render } from '@/test/utils';

import { Categorias } from './Categorias';

jest.mock('../Pill/Pill', () => ({
  Pill: () => <MockedView testID="pill" />,
}));

const updateCategoriaSelecionada = jest.fn();

const setup = (categoriaSelecionada = '') => {
  mockedCatalagoStore({
    categorias: ['categoria-A', 'categoria-B'],
    categoriaSelecionada,
    updateCategoriaSelecionada,
  });
  const container = render(<Categorias />);
  const categorias = container.getAllByLabelText(/Filtrar por categoria-/g);
  return { container, categorias };
};

describe('<Categorias/>', () => {
  describe('quando renderizado', () => {
    test('e alguma categoria está selecionada', () => {
      const { container } = setup('categoria-A');
      const limparFiltro = container.getByLabelText(
        'Limpar filtro de categoria-A'
      );
      fireEvent.press(limparFiltro);
      expect(updateCategoriaSelecionada).toHaveBeenCalledWith(undefined);
    });
    test('e nenhuma categoria está selecionada', () => {
      const { container } = setup();
      expect(container.queryByLabelText(/Limpar filtro de/)).toBeFalsy();
    });
    test('e alguma categoria é pressionada', () => {
      const { categorias } = setup();
      const [categoriaA, categoriaB] = categorias;
      fireEvent.press(categoriaA);
      expect(updateCategoriaSelecionada).toHaveBeenCalledWith('categoria-A');
      fireEvent.press(categoriaB);
      expect(updateCategoriaSelecionada).toHaveBeenCalledWith('categoria-B');
    });
  });
});
