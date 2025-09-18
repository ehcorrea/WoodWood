import { View as MockedView } from 'react-native';

import { render } from '@/test/utils';

import * as useListarProdutos from './hooks/useListarProdutos/useListarProdutos';

import CatalogoScreen from './CatalogoScreen';

jest.mock('./components', () => ({
  Categorias: () => <MockedView testID="categorias" />,
  ListaDeProdutos: () => <MockedView testID="listaDeProdutos" />,
}));

const mockUseListarProdutos = jest.fn();

describe('<CatalogoScreen/>', () => {
  test('quando renderizado', () => {
    jest
      .spyOn(useListarProdutos, 'useListarProdutos')
      .mockImplementation(mockUseListarProdutos);
    const container = render(<CatalogoScreen />);
    expect(mockUseListarProdutos).toHaveBeenCalled();
    expect(container.getByTestId('categorias')).toBeTruthy();
    expect(container.getByTestId('listaDeProdutos')).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
