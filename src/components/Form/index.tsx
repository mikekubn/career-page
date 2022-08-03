import React from 'react';
import Input from '../Input';
import TextArea from '../TextArea';

export type TFormValues = {
  subject: string;
  from_name: string;
  from_email: string;
  messages: string;
};

export const defaultValues = {
  subject: '',
  from_name: '',
  from_email: '',
  messages: '',
};

interface IForm {
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  setValues: (values: TFormValues) => void;
  values: TFormValues;
}

const Form = ({ handleSubmitForm, setValues, values }: IForm): React.ReactElement => {
  const form = React.useRef(null);

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  const isDisabled = !values.from_email.length || !values.from_name.length || !values.messages.length || !values.subject.length;

  return (
    <form ref={form} onSubmit={handleSubmitForm} className="flex flex-col mx-auto w-5/6 md:w-1/2 lg:w-96 xl:w-96 lg:mx-14">
      <section className="flex pb-5 mx-auto">
        <h1 data-testid="form-head" className="text-2xl">
          Contact me 📭
        </h1>
      </section>
      <Input label="Subject" type="subject" name="subject" placeholder="Write here" value={values.subject} handleChange={handleChange} />
      <Input label="Full Name" type="text" name="from_name" placeholder="Write here" value={values.from_name} handleChange={handleChange} />
      <Input label="Your Email" type="email" name="from_email" placeholder="example@foo.com" value={values.from_email} handleChange={handleChange} />
      <TextArea name="messages" label="Your message" value={values.messages} handleChange={handleChange} />
      <button
        type="submit"
        className={`rounded-full shadow-md shadow-black dark:shadow-white hover:shadow-black w-40 p-3 mt-5 
          ${isDisabled ? 'cursor-default' : 'cursor-pointer'} 
          ${isDisabled ? 'hover:shadow-md' : 'hover:shadow-sm'}
          ${isDisabled ? 'text-red400' : ''}
        `}
        disabled={isDisabled}>
        <div className="flex flex-row justify-center">
          <p className="pr-3">{isDisabled ? 'Fill in all' : 'Send'}</p>
          <p>{isDisabled ? '📪' : '📫'}</p>
        </div>
      </button>
    </form>
  );
};

export default Form;
