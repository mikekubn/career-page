'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLeft } from './Sections';
import { H2 } from './Typography';
import Parallax from './Parallax';

const Technology = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex md:flex-row justify-center md:justify-end">
      <SectionLeft isInView={isInView}>
        <div ref={ref} />
        <H2 font="bold" className="gradient-text-animate mb-8 pb-2 text-center">
          Technology dev stack.
        </H2>
        <Parallax />
      </SectionLeft>
    </section>
  );
};

export default Technology;
