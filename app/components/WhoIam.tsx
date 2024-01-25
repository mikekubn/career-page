'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLeft } from './Sections';
import { H2, ParagrapExtrahLarge } from './Typography';

const WhoIam = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex md:flex-row">
      <SectionLeft isInView={isInView} id="who-i-am" className="flex flex-col w-full lg:w-1/2">
        <div ref={ref} />
        <H2 font="bold" className="gradient-text-animate mb-8">
          Who I am?
        </H2>
        <ParagrapExtrahLarge font="light" className="text-left">
          Hello everyone, I&apos;m Michael Kubin, a software engineer primarily focused on utilizing tools such as React, Next.js, Node.js (Nest.js),
          Cypress, and various others. Besides coding, my passion is hiking, where I find solace and peace amidst the beauty of nature ⛰ 🥾.
        </ParagrapExtrahLarge>
      </SectionLeft>
    </section>
  );
};

export default WhoIam;
