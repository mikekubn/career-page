import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '.';

const inputName = 'Unit Test';

describe('Input', () => {
  it('render input', () => {
    const onChange = jest.fn();
    render(<Input label="Name" name={inputName} type="name" placeholder="test-name" value="" handleChange={onChange} />);

    userEvent.type(screen.getByLabelText(/name/i), inputName);

    waitFor(() => {
      expect(screen.getByTestId('input-name')).toHaveValue(inputName);
      expect(onChange).toHaveBeenCalled();
    });
  });
});
