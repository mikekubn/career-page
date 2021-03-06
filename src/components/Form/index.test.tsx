import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '.';

const subject = 'Test mail';
const name = 'Jarek Parek';
const email = 'ocal@host.cz';
const messages = 'Lorem ipsum also approximates a typical distribution of letters in English.';
const values = {
  subject,
  from_name: name,
  from_email: email,
  messages,
};

describe('Form', () => {
  it('render form', async () => {
    const onSubmit = jest.fn();
    const setValues = jest.fn();
    render(<Form handleSubmitForm={onSubmit} setValues={setValues} values={values} />);

    const inputSubject = screen.getByTestId(/subject/i);
    const inputName = screen.getByLabelText(/name/i);
    const inputEmail = screen.getByLabelText(/email/i);
    const inputmMessages = screen.getByLabelText(/message/i);

    await userEvent.type(inputSubject, subject);
    await userEvent.type(inputName, name);
    await userEvent.type(inputEmail, email);
    await userEvent.type(inputmMessages, messages);

    expect(screen.getByTestId('form-head')).toHaveTextContent('Contact me');

    expect(inputSubject).toHaveValue(subject);
    expect(inputName).toHaveValue(name);
    expect(inputEmail).toHaveValue(email);
    expect(inputmMessages).toHaveValue(messages);
  });
});
