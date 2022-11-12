import React from 'react';
import { NextPageWithLayout } from './_app';
import MainLayout from '@/layouts/Layout';
import Header from '@/layouts/Header';
import Link from 'next/link';
import { Button, H2 } from '@/components/Typography';
import RotateList from '@/components/RotateList';
import Metadata from '@/components/Metadata';

const Home: NextPageWithLayout = () => (
  <>
    <Metadata title="Michael Kubín" siteName="React Developer" />
    <section className="m-auto flex flex-col flex-1 items-center justify-center">
      <H2 className="font-bold uppercase mb-10">
        Michael <span className="text-blue">Kubin</span>
      </H2>
      <RotateList className="flex justify-center box-content mb-10 cursor-default" titleSize="text-2xl" />
      <Link href="/about" passHref legacyBehavior>
        <Button className="px-12 py-4 text-xl">Discover</Button>
      </Link>
    </section>
  </>
);

export default Home;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <Header />
      <MainLayout className="justify-center items-center">{page}</MainLayout>
    </>
  );
};
