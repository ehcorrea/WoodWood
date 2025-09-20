import { render } from '@/test/utils';
import { criarMockProduto } from '@/shared/__mocks__';

import { CardProduto } from './CardProduto';

const produto = criarMockProduto();

describe('<CardProduto/>', () => {
  test('quando renderizado', () => {
    const container = render(<CardProduto produto={produto} />);
    expect(container.getByText(produto.title)).toBeTruthy();
    expect(container.getByText(`R$ ${produto.price}`)).toBeTruthy();
    expect(container).toMatchSnapshot();
  });
});
