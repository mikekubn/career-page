import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from '.';

describe('Input', () => {
  it('render input', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<Input label="name" value="name" placeholder="test-name" onChange={onChange} />);
    const input = getByLabelText(/name/i) as HTMLInputElement;

    userEvent.type(input, 'name');
    expect(input.value).toEqual('name');
  });
});
