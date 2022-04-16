import { fireEvent, render, screen } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  it('render card', async () => {
    const handleClick = jest.fn();
    render(<Card handleClick={handleClick}>Foo</Card>);

    expect(screen.getByText('Foo')).toBeVisible();
    fireEvent.click(screen.getByTestId('card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
