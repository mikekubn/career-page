import React from 'react';
import MainLayout from '@/layouts/Layout';
import { NextPageWithLayout } from './_app';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/utils';
import { Button } from '@/components/Typography';
import { useRouter } from 'next/router';

const Error404: NextPageWithLayout = (): React.ReactElement => {
  const { push } = useRouter();

  return (
    <section className="flex flex-col justify-center mx-auto items-center h-screen">
      <Image src={getCloudinaryUrl({ url: 'assets/404_Error-pana_xknb4q.png' })} width="600" height="400" alt="Not found" />
      <Button className="py-3 w-36" onClick={() => push('/')}>
        GO HOME
      </Button>
    </section>
  );
};

export default Error404;

Error404.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <>
      <MainLayout>{page}</MainLayout>
    </>
  );
};
