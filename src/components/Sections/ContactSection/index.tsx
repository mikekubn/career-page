import React from 'react';
import Router from 'next/router';
import { hrefs } from 'src/configs/navigation';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import { useIntersection } from '@/hooks/index';
import Input from '@/components/Input';
import TextArea from '@/components/TextArea';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import ImageTooltip from '@/components/ImageTooltip';
import MotionDiv from '@/components/Motions/MotionDiv';

const ContactSection = (): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();
  const { dispatch } = useNotificationProvider();
  const form = React.useRef(null);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, event.currentTarget, `${process.env.NEXT_PUBLIC_USER_ID}`);
      dispatch({ visible: true, status: 'success', note: 'Email send success.' });
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
      <MotionDiv>
        <Gallery />
      </MotionDiv>
      <div className="justify-end my-8 flex-col-1 lg:flex-col-center-content lg:mb-0">
        <div className="flex flex-col overflow-auto">
          <MotionDiv>
            <form ref={form} onSubmit={handleSubmitForm} className="flex flex-col mx-auto w-72 lg:w-96 lg:mx-14">
              <section className="flex pb-5 mx-auto">
                <h1 className="text-2xl font-AsapItal">Contact me</h1>
              </section>
              <Input label="Subject" type="subject" name="subject" placeholder="Write here" />
              <Input label="Full Name" type="text" name="from_name" placeholder="Write here" />
              <Input label="Your Email" type="email" name="from_email" placeholder="example@foo.com" />
              <TextArea name="message" label="Your message" />
              <button
                type="submit"
                className="button-style"
              >
                <p className="pr-3">Send</p>
                <Image src="/img/email.png" height={26} width={26} alt="Send" />
              </button>
            </form>
          </MotionDiv>
        </div>
      </div>
    </div>
  );
};

const imgHeight = '70';
const imgWeight = '70';

const Gallery = () => (
  <div className="items-center my-20 lg:my-auto flex-col-1 lg:h-96">
    <div className="flex flex-row flex-1">
      <ImageTooltip
        positon="justify-center"
        root="technology/typescript_n"
        height={imgHeight}
        width={imgWeight}
        alt="Technology typescript"
        tooltip="Typescript"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/cypress"
        height={imgHeight}
        width={imgWeight}
        alt="Technology cypress"
        tooltip="Cypress"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/react"
        height={imgHeight}
        width={imgWeight}
        alt="Technology react"
        tooltip="React"
      />
    </div>
    <div className="flex flex-row flex-1">
      <ImageTooltip
        positon="justify-center"
        root="technology/javascript_n"
        height={imgHeight}
        width={imgWeight}
        alt="Technology javascript"
        tooltip="Javascript"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/nuxt"
        height={imgHeight}
        width={imgWeight}
        alt="Technology nuxt"
        tooltip="Nuxt"
      />
      <ImageTooltip
        positon="justify-center"
        root="technology/framer"
        height={imgHeight}
        width={imgWeight}
        alt="Technology framer"
        tooltip="Framer"
      />
    </div>
  </div>
);

export default ContactSection;
