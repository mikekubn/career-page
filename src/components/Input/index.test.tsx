import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import Input from '.';

const inputName = 'Unit Test';

describe('Input', () => {
  it('render input', () => {
    render(<Input label="Name" name={inputName} type="name" placeholder="test-name" />);

    userEvent.type(screen.getByLabelText(/name/i), inputName);

    waitFor(() => {
      expect(screen.getByTestId('input')).toHaveValue(inputName);
    });
  });
});
