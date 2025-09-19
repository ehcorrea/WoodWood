import { render } from '@/test/utils';
import { BotaoVoltar } from './BotaoVoltar';

const setup = () => {
  return render(<BotaoVoltar />);
};

describe('<BotaoVoltar/>', () => {
  test('quando renderizado', () => {
    const container = setup();
    expect(container).toMatchSnapshot();
  });
});
