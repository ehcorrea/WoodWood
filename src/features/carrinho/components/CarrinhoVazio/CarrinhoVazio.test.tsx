import { render } from '@/test/utils';
import CarrinhoScreen from '../../CarrinhoScreen';

describe('<CarrinhoVazio/>', () => {
  test('quando renderizado', () => {
    const container = render(<CarrinhoScreen />);
    expect(container).toMatchSnapshot();
  });
});
