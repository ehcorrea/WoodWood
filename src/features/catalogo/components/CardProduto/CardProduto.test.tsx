import { criarMockProduto, render } from '@/test/utils';

import { CardProduto } from './CardProduto';

const produto = criarMockProduto();

describe('<CardProduto/>', () => {
  test('quando renderizado', () => {
    const container = render(<CardProduto produto={criarMockProduto()} />);
    expect(container.getByText(produto.title)).toBeTruthy();
    expect(container.getByText(`R$ ${produto.price}`)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
