import { useNotificationProvider } from '@/provider/NotificationProvider';
import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';
import emailjs from '@emailjs/browser';
import { Button } from '../Typography';

export type TFormValues = {
  subject: string;
  name: string;
  email: string;
  messages: string;
};

export const defaultValues = {
  subject: '',
  name: '',
  email: '',
  messages: '',
};

const Form = (): React.ReactElement => {
  const form = React.useRef<HTMLFormElement>(null);
  const { dispatch } = useNotificationProvider();
  const [values, setValues] = React.useState<TFormValues>(defaultValues);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, values, `${process.env.NEXT_PUBLIC_USER_ID}`);
      dispatch({
        visible: true,
        status: 'success',
        note: 'Email send success.',
      });
      setValues(defaultValues);
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Email send failed.' });
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;

    setValues({ ...values, [name]: value });
  };

  const isDisabled = !values.email.length || !values.name.length || !values.messages.length || !values.subject.length;

  return (
    <form ref={form} onSubmit={handleSubmitForm} className="flex flex-col w-72 md:w-96">
      <section className="flex pb-5 mx-auto">
        <h1 data-testid="form-head" className="text-2xl">
          Contact me 📭
        </h1>
      </section>
      <Input label="Subject" type="subject" name="subject" placeholder="Write here" value={values.subject} onChange={handleChange} />
      <Input label="Full Name" type="text" name="name" placeholder="Write here" value={values.name} onChange={handleChange} />
      <Input label="Your Email" type="email" name="email" placeholder="example@foo.com" value={values.email} onChange={handleChange} />
      <TextArea name="messages" label="Your message" value={values.messages} handleChange={handleChange} />
      <Button type="submit" disabled={isDisabled} className="w-40 p-3 mt-6">
        <div className="flex flex-row justify-center">
          <p className="pr-3">{isDisabled ? 'Fill in all' : 'Send'}</p>
          <p>{isDisabled ? '📪' : '📫'}</p>
        </div>
      </Button>
    </form>
  );
};

export default Form;
