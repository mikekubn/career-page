import { screen, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextArea from '.';

describe('Text area', () => {
  it('render text area', () => {
    const onChange = jest.fn();
    render(<TextArea label="Test" name="test" value="" handleChange={onChange} />);

    waitFor(() => {
      expect(screen.getByLabelText('message-contact')).toHaveTextContent('test');
      expect(onChange).toHaveBeenCalled();
    });

    userEvent.type(screen.getByLabelText(/test/i), 'input value');

    waitFor(() => {
      expect(screen.getByLabelText('message-contact')).toHaveTextContent('input value');
    });
  });
});
