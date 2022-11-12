import React from 'react';
import MainLayout from '@/layouts/Layout';
import { NextPageWithLayout } from './_app';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/utils';
import { Button } from '@/components/Typography';
import { useRouter } from 'next/router';
import Metadata from '@/components/Metadata';

const Error404: NextPageWithLayout = (): React.ReactElement => {
  const { push } = useRouter();

  return (
    <>
      <Metadata title="404" siteName="Not found" description="Sorry, we did not find the way." />
      <section className="flex flex-1 flex-col justify-center mx-auto items-center">
        <Image src={getCloudinaryUrl('assets/404_Error-pana_xknb4q.png')} width="600" height="400" />
        <Button className="py-3 w-36" onClick={() => push('/')}>
          Go home
        </Button>
      </section>
    </>
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
