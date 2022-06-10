import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import emailjs from '@emailjs/browser';
import { useIntersection } from '@/hooks/index';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import Form, { defaultValues, TFormValues } from '@/components/Form';
import dynamic from 'next/dynamic';
import { IParamsProps } from 'src/pages';

const Gallery = dynamic(() => import('@/components/Gallery'));

const ContactSection = ({ resources }: { resources: IParamsProps['resources'] }): React.ReactElement => {
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
      <Gallery images={resources}/>
      <div className="flex flex-col justify-center mx-auto sm:overflow-auto">
        <Form handleSubmitForm={handleSubmitForm} setValues={setValues} values={values} />
      </div>
    </section>
  );
};

export default ContactSection;
