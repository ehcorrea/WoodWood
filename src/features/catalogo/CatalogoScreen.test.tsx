import { View as MockedView } from 'react-native';

import { render } from '@/test/utils';

import * as useListarProdutos from './hooks/useListarProdutos/useListarProdutos';

import CatalogoScreen from './CatalogoScreen';

jest.mock('./components', () => ({
  Categorias: () => <MockedView testID="categorias" />,
  ListaDeProdutos: () => <MockedView testID="listaDeProdutos" />,
}));

const mockUseListarProdutos = jest.fn();

const setup = (isLoading = false) => {
  jest.spyOn(useListarProdutos, 'useListarProdutos').mockImplementation(() => {
    mockUseListarProdutos();
    return { isLoading };
  });
  return render(<CatalogoScreen />);
};

describe('<CatalogoScreen/>', () => {
  describe('quando renderizado', () => {
    test('e em loading', () => {
      const container = setup(true);
      expect(mockUseListarProdutos).toHaveBeenCalled();
      expect(container.getByTestId('loading')).toBeTruthy();
      expect(container.queryByTestId('categorias')).toBeFalsy();
      expect(container.queryByTestId('listaDeProdutos')).toBeFalsy();
      expect(container).toMatchSnapshot();
    });
  });
  test('quando renderizado', () => {
    const container = setup();
    expect(container.queryByTestId('loading')).toBeFalsy();
    expect(container.getByTestId('categorias')).toBeTruthy();
    expect(container.getByTestId('listaDeProdutos')).toBeTruthy();
  });
});
