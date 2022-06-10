import React from 'react';
import Image from 'next/image';
import Input from '../Input';
import TextArea from '../TextArea';
import { getCloudinaryUrl } from '@/lib/utils';

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

const Form = ({
  handleSubmitForm,
  setValues,
  values,
}: IForm): React.ReactElement => {
  const form = React.useRef(null);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmitForm}
      className="flex flex-col mx-auto w-72 lg:w-96 lg:mx-14"
    >
      <section className="flex pb-5 mx-auto">
        <h1 data-testid="form-head" className="text-2xl font-AsapItal">
          Contact me
        </h1>
      </section>
      <Input
        label="Subject"
        type="subject"
        name="subject"
        placeholder="Write here"
        value={values.subject}
        handleChange={handleChange}
      />
      <Input
        label="Full Name"
        type="text"
        name="from_name"
        placeholder="Write here"
        value={values.from_name}
        handleChange={handleChange}
      />
      <Input
        label="Your Email"
        type="email"
        name="from_email"
        placeholder="example@foo.com"
        value={values.from_email}
        handleChange={handleChange}
      />
      <TextArea
        name="messages"
        label="Your message"
        value={values.messages}
        handleChange={handleChange}
      />
      <button type="submit" className="button-style">
        <p className="pr-3">Send</p>
        <Image
          src={getCloudinaryUrl('assets/email_eifwav.png')}
          height={26}
          width={26}
          alt="Send"
        />
      </button>
    </form>
  );
};

export default Form;
