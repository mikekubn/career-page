import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ToggleButton from '.';

describe('Toggle button', () => {
  it('render toggle button to be checked', async () => {
    const onChange = jest.fn();
    render(<ToggleButton callback={onChange} value />);

    expect(screen.getByRole('switch')).toHaveAttribute('checked', '');
    expect(screen.getByRole('switch')).toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByRole('switch'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('render toggle button to be not checked', async () => {
    const onChange = jest.fn();
    render(<ToggleButton callback={onChange} value={false} />);

    expect(screen.getByRole('switch')).not.toHaveAttribute('checked', '');
    expect(screen.getByRole('switch')).not.toBeChecked();
    expect(onChange).toHaveBeenCalledTimes(0);

    await userEvent.click(screen.getByRole('switch'));

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
