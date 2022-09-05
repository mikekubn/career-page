import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import dynamic from 'next/dynamic';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const DynamicForm = dynamic(() => import('../../components/Form/index'));

const About: NextPageWithLayout = () => {
  return (
    <section className="m-auto">
      <DynamicForm />
    </section>
  );
};

export default About;

About.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout>{page}</MainLayout>
    </>
  );
};
