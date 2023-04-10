'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Parallax from './Parallax';
import { SectionLeft } from './Sections';
import { H2, ParagraphLarge } from './Typography';

const WhoIam = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="flex flex-col md:flex-row flex-1 justify-center items-center md:justify-between min-h-screen gap-6">
      <SectionLeft isInView={isInView} id="who-i-am" className="flex flex-col w-full md:w-1/2 justify-center mb-16 md:mb-0">
        <H2 font="bold" className="gradient-text-animate mb-8">
          Who I am?
        </H2>
        <ParagraphLarge font="light" className="text-justify">
          Hi everyone, I'm Michael Kubin software engineer mostly working with tools like React, Nextjs, Nodejs, Cypress and many others. I currently
          lead the frontend team at{' '}
          <a href="https://www.akcenta.digital/" target="_blank" className="underline hover:no-underline gradient-blue-text">
            Akcenta
          </a>{' '}
          company. We are facing a major challenge to digitalize of an international financial company. I love hiking, so when I'm not coding I enjoy
          the peace and quiet there ⛰ 🥾.
        </ParagraphLarge>
      </SectionLeft>
      <SectionLeft isInView={isInView} className="flex flex-col w-full md:w-1/2 justify-center items-center mb-28 md:mb-0">
        <H2 font="bold" className="gradient-text-animate mb-8 pb-2 text-center">
          Technology dev stack.
        </H2>
        <Parallax />
      </SectionLeft>
    </section>
  );
};

export default WhoIam;
