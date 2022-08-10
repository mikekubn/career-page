import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import Card from '@/components/Card';
import { defaultValues, TFormValues } from '@/components/Form';
import emailjs from '@emailjs/browser';
import { useNotificationProvider } from '@/provider/NotificationProvider';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { LgParagraph } from '@/components/Typography';

const DynamicForm = dynamic(() => import('@/components/Form'));

const Home: NextPage = () => {
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

  return (
    <>
      <Head>
        <meta name="description" content="Michael Kubin frontend developer, introducing" />
        <meta property="og:title" content="Michael Kubin - Frontend developer" />
        <meta property="og:description" content="Michael Kubin introducing" />
      </Head>
      <section className="flex flex-col flex-1">
        <div className="flex flex-row justify-center mt-6 md:mt-14 md:h-40">
          <span className="w-20 h-20 md:w-40 md:h-40">
            <Image alt="profile-image" src="career_page/profile/home_photo_circle_k9t68o" width="160" height="160" className="rounded-full" />
          </span>
          <div className="flex flex-col pl-4 md:pl-10 my-auto cursor-default leading-relaxed tracking-wide">
            <h1 className="text-2xl font-medium">Michael Kubín</h1>
            <h2 className="text-xl font-medium">Webscope</h2>
            <p className="text-lg font-light italic">React, Frontend, Next.js 🚀</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center md:flex-row md:justify-between lg:w-11/12 lg:mx-auto xl:w-9/12 xl:mx-auto">
        <Card title="About Me">
          <LgParagraph className="p-3 md:p-6">
            Hi everyone, I&apos;m Michael and I&apos;m a frontend developer mostly working with React and I really enjoy working with the Cypress e2e
            testing framework 👨‍💻. I love hiking, so when I&apos;m not coding I enjoy the peace and quiet there ⛰ 🥾.
          </LgParagraph>
        </Card>
        <Card title="My Stack">
          <div className="p-2 md:p-6 flex flex-row flex-1 flex-wrap">
            {myStack.map((item) => (
              <LgParagraph key={item} className="text-center rounded-xl shadow-lg shadow-black p-2 m-1 mb-4">
                {item}
              </LgParagraph>
            ))}
          </div>
        </Card>
      </section>
      <section className="my-16 md:my-20 xl:my-24 flex flex-1 flex-row justify-center">
        <DynamicForm handleSubmitForm={handleSubmitForm} setValues={setValues} values={values} />
      </section>
    </>
  );
};

export default Home;

const myStack = ['Frontend Development 👨‍💻', 'End to End testing 🧪🪛', 'Cypress', 'React 🏢', 'TypeScript ❤️', 'Next.js 🏎'];
