import { screen, render } from '@testing-library/react';
import Navigation from '.';

const mocks = [
  { name: 'items_1', url: '#items_1' },
  { name: 'items_2', url: '#items_2' },
  { name: 'items_3', url: '#items_3' },
];

describe('Navigation', () => {
  it('render navigation', () => {
    render(<Navigation items={mocks} />);

    mocks.forEach((mock) => {
      expect(screen.getByTestId(`nav-${mock.name}`)).toHaveTextContent(mock.name);
    });
  });
});
