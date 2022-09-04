import Header from '@/layouts/Header';
import MainLayout from '@/layouts/Layout';
import React from 'react';
import { NextPageWithLayout } from '../_app';

const About: NextPageWithLayout = () => {
  return <></>;
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
