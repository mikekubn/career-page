import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import { getCloudinaryUrl } from '@/lib/utils';
import dynamic from 'next/dynamic';
import React from 'react';
import { NextPageWithLayout } from '../_app';
import Image from 'next/image';

const DynamicForm = dynamic(() => import('../../components/Form/index'));

const Contact: NextPageWithLayout = () => {
  return (
    <section className="h-screen flex flex-col flex-1 items-center justify-center mb-10 sm:my-0">
      <div className="flex justify-center">
        {links.map((link) => (
          <button key={link.src} className="mx-2 mb-6">
            <a href={link.url} target="_blank" rel="noreferrer">
              <Image key={link.src} src={link.img} width="30" height="30" className="cursor-pointer" alt={link.name} />
            </a>
          </button>
        ))}
      </div>
      <DynamicForm />
    </section>
  );
};

export default Contact;

Contact.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>{page}</MainLayout>
    </>
  );
};

const links: { name: string; src: string; url: string; img: string }[] = [
  {
    name: 'GitHub',
    src: 'github',
    url: `${process.env.NEXT_PUBLIC_GITHUB}`,
    img: getCloudinaryUrl({ url: 'assets/github-144_ltj43s.png' }),
  },
  {
    name: 'LinkedIn',
    src: 'linkedin',
    url: `${process.env.NEXT_PUBLIC_LINKEDIN}`,
    img: getCloudinaryUrl({ url: 'assets/linkedin_mgrtgk.png' }),
  },
  {
    name: 'Twitter',
    src: 'twitter',
    url: `${process.env.NEXT_PUBLIC_TWITTER}`,
    img: getCloudinaryUrl({ url: 'assets/twitter_qgwhdw.png' }),
  },
];
