import { fireEvent } from '@testing-library/react-native';

import { render } from '@/test/utils';
import { criarMockProdutoDoCarrinho } from '@/shared/__mocks__';

import { CardProduto } from './CardProduto';

const produto = criarMockProdutoDoCarrinho();
const onAdicionar = jest.fn();
const onRemover = jest.fn();

const setup = () => {
  const container = render(
    <CardProduto
      produto={produto}
      onAdicionar={onAdicionar}
      onRemover={onRemover}
    />
  );
  const buttonAdicionar = container.getByLabelText(
    `Adicionar mais uma unidade de ${produto.title}`
  );
  const buttonRemover = container.getByLabelText(
    `Remover uma unidade de ${produto.title}`
  );
  return { container, buttonAdicionar, buttonRemover };
};

describe('<CardProduto/>', () => {
  test('quando renderizado', () => {
    const { container, buttonAdicionar, buttonRemover } = setup();
    expect(container.getByText(`1 x R$ 100.00`)).toBeTruthy();
    fireEvent.press(buttonAdicionar);
    expect(onAdicionar).toHaveBeenCalledWith(produto);
    fireEvent.press(buttonRemover);
    expect(onRemover).toHaveBeenCalledWith(produto);
  });
});
