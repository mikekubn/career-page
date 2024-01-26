'use client';

import { useEffect } from 'react';
import { H2, ParagraphLarge } from './components/Typography';
import Image from 'next/image';
import Link from 'next/link';

const Error = ({ error }: { error: Error }): React.ReactElement => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6">
      <H2 font="regular" className="gradient-text">
        Not Found.
      </H2>
      <div className="relative w-[340px] h-[220px] md:w-[700px] md:h-[350px]">
        <Image loading="eager" src="/assets/not_found.gif" fill alt="Not found" className="rounded-3xl" />
      </div>
      <div className="inline-flex text-center">
        <ParagraphLarge font="regular" className="gradient-blue-text">
          Could not find requested resource &nbsp;
        </ParagraphLarge>
        <Link className="gradient-blue-text hover:to-purple" href="/">
          <ParagraphLarge font="regular" className="gradient-blue-text hover:to-purple">
            go home.
          </ParagraphLarge>
        </Link>
      </div>
    </section>
  );
};

export default Error;
