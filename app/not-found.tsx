import React from 'react';
import Link from 'next/link';
import Lines from '@/public/svg/lines.svg';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not Found',
};

const NotFoundPage = () => {
  return (
    <section className="font-sourceCodePro flex flex-col items-center h-screen max-w-screen-lg mx-auto px-6 gap-3 md:gap-6">
      <h1 className="text-[32px]  md:text-[62px] font-bold mt-10 md:mt-0">404</h1>
      <div className="flex flex-col items-center gap-2">
        <p className="text-[20px] md:text-[28px] text-center">The page you&apos;re looking for doesn&apos;t exist.</p>
        <div className="group flex flex-col gap-0.5">
          <Link href="/" className="text-[20px] md:text-[28px] text-center group-hover:text-blue/50">
            I wanna Go home!
            {/**@ts-ignore */}
            <Lines className="group-hover:fill-blue/50 w-[340px] md:w-[438px] h-[30px]" />
          </Link>
        </div>
      </div>
      <div className="relative w-[340px] h-[220px] md:w-[480px] md:h-[300px] mt-10">
        <Image src="/gifs/giphy.gif" alt="404" fill />
      </div>
    </section>
  );
};

export default NotFoundPage;
