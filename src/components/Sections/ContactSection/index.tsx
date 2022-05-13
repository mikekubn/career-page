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
    <section ref={ref} id="contact" className="section-layout">
      <Gallery />
      <div className="flex flex-col justify-center mx-auto sm:overflow-auto">
        <Form handleSubmitForm={handleSubmitForm} setValues={setValues} values={values} />
      </div>
    </section>
  );
};

const Gallery = () => (
  <div className="justify-center mx-auto mb-10 mt-5 flex flex-col md:my-auto lg:h-96">
    <div className="flex flex-row">
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
    <div className="flex flex-row">
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
