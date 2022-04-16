import { screen, render } from '@testing-library/react';
import Name, { name, position } from '.';

describe('Name', () => {
  it('render name', () => {
    render(<Name />);

    expect(screen.getByTestId('name')).toBeVisible();
    expect(screen.getByTestId('name')).toHaveTextContent(name);

    expect(screen.getByTestId('position')).toBeVisible();
    expect(screen.getByTestId('position')).toHaveTextContent(position);
  });
});
