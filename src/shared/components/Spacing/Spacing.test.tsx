import { render } from '@/test/utils';

import { Spacing, SpacingProps } from './Spacing';

const setup = (props?: SpacingProps) => render(<Spacing {...props} />);

describe('<Spacing/>', () => {
  describe('quando renderizado', () => {
    test.each([
      { props: { x: 5, y: 5 }, result: { x: 5, y: 5 } },
      { props: { x: 10, y: 10 }, result: { x: 10, y: 10 } },
      { props: { x: 15, y: 15 }, result: { x: 15, y: 15 } },
    ])('com x=$props.x e y=$props.y', ({ props, result }) => {
      const container = setup(props);
      const spacing = container.getByTestId('spacing');
      expect(spacing).toHaveStyle({ marginHorizontal: result.x });
      expect(spacing).toHaveStyle({ marginVertical: result.y });
      expect(container).toMatchSnapshot();
    });
  });
});
