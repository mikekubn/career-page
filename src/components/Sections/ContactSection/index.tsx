import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import emailjs from '@emailjs/browser';
import { useIntersection } from '@/hooks/index';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import ImageTooltip from '@/components/ImageTooltip';
import Form, { defaultValues, TFormValues } from '@/components/Form';

const ContactSection = (): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();
  const { dispatch } = useNotificationProvider();
  const [values, setValues] = React.useState<TFormValues>(defaultValues);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.send(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, values, `${process.env.NEXT_PUBLIC_USER_ID}`);
      dispatch({ visible: true, status: 'success', note: 'Email send success.' });
      setValues(defaultValues);
    } catch (e) {
      dispatch({ visible: true, status: 'error', note: 'Email send failed.' });
    }
  };

  React.useEffect(() => {
    if (visible) {
      Router.push({
        pathname: '/',
        hash: hrefs.contact,
      }, undefined, { scroll: false });
    }
  }, [visible]);

  return (
    <div id="contact" ref={ref} className="flex-col-1 lg:flex-row-1">
      <Gallery />
      <div className="justify-end my-8 flex-col-1 lg:flex-col-center-content lg:mb-0">
        <div className="flex flex-col overflow-auto">
          <Form handleSubmitForm={handleSubmitForm} setValues={setValues} values={values} />
        </div>
      </div>
    </div>
  );
};

const Gallery = () => (
  <div className="items-center my-10 lg:my-auto flex-col-1 lg:h-96">
    <div className="flex-row-1">
      <ImageTooltip
        positon="justify-center"
        root="technology/typescript_n"
        alt="Technology typescript"
        tooltip="Typescript"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/cypress"
        alt="Technology cypress"
        tooltip="Cypress"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/react"
        alt="Technology react"
        tooltip="React"
      />
    </div>
    <div className="flex-row-1">
      <ImageTooltip
        rtl
        positon="justify-center"
        root="technology/javascript_n"
        alt="Technology javascript"
        tooltip="Javascript"
      />
      <ImageTooltip
        rtl
        positon="justify-center"
        root="technology/nuxt"
        alt="Technology nuxt"
        tooltip="Nuxt"
      />
      <ImageTooltip
        rtl
        positon="justify-center"
        root="technology/framer"
        alt="Technology framer"
        tooltip="Framer"
      />
    </div>
  </div>
);

export default ContactSection;
