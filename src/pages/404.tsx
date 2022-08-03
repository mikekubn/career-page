import React from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRealHeight } from '@/hooks/useRealHeight';

const Error404: NextPage = (): React.ReactElement => {
  const { height } = useRealHeight();

  return (
    <>
      <section className="flex flex-col items-center justify-center" style={{ minHeight: `${height}px` }}>
        <h1 className="text-3xl mb-16">Sorry page was not found 404</h1>
        <Link href="/" scroll={false} replace passHref>
          <button className="p-4 rounded-full shadow-lg shadow-black dark:shadow-white flex flex-row justify-center hover:text-lg">
            Do you want to go to the home page?
          </button>
        </Link>
      </section>
    </>
  );
};

export default Error404;
