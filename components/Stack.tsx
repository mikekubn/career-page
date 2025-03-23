'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ReactSvg from '@/public/technologies/react.svg';
import NextJsSvg from '@/public/technologies/next-js.svg';
import TypeScriptSvg from '@/public/technologies/ts.svg';
import JavaScriptSvg from '@/public/technologies/js.svg';
import TailwindCssSvg from '@/public/technologies/tailwind.svg';
import VercelSvg from '@/public/technologies/vercel.svg';
import DigitalOceanSvg from '@/public/technologies/digitalocean.svg';
import HtmlSvg from '@/public/technologies/html-5.svg';
import PrismaSvg from '@/public/technologies/prisma.svg';
import StrapiSvg from '@/public/technologies/strapi.svg';
import clsx from 'clsx';

const technologies = [
  //@ts-ignore
  { title: 'React', src: <ReactSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'Next.js', src: <NextJsSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'TypeScript', src: <TypeScriptSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'JavaScript', src: <JavaScriptSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'Tailwind CSS', src: <TailwindCssSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'HTML', src: <HtmlSvg className="size-[50px] md:size-[60px]" /> },
  //@ts-ignore
  { title: 'DigitalOcean', src: <DigitalOceanSvg className="size-[90px] md:size-[120px]" /> },
];

const services = [
  //@ts-ignore
  { title: 'Vercel', src: <VercelSvg className="h-[80px] w-[140px] md:h-[80px] md:w-[160px]" /> },
  //@ts-ignore
  { title: 'Prisma', src: <PrismaSvg className="h-[80px] w-[140px] md:h-[80px] md:w-[160px]" /> },
  //@ts-ignore
  { title: 'Strapi', src: <StrapiSvg className="h-[80px] w-[140px] md:h-[80px] md:w-[160px]" /> },
];

const staggerAnimation = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const Stack = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <section className="h-screen w-full flex flex-col justify-center">
      <div
        ref={ref}
        className="grid grid-cols-3 gap-16 md:gap-2 place-items-center justify-center md:w-[720px] lg:w-[960px] mx-auto"
        style={{ gridAutoRows: 'minmax(100px, auto)' }}>
        {technologies.map((technology, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={staggerAnimation}
            className={clsx('flex items-center justify-center', {
              'col-start-1 col-span-3': index === 6,
            })}>
            {React.cloneElement(technology.src)}
          </motion.div>
        ))}
      </div>
      <div className="h-6" />
      <div
        className="grid grid-cols-2 gap-12 md:gap-6 place-items-center justify-center md:w-[720px] lg:w-[960px] mx-auto"
        style={{ gridAutoRows: 'minmax(100px, auto)' }}>
        {services.map((technology, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={staggerAnimation}
            className={clsx('flex items-center justify-center', {
              'col-start-1 col-span-2': index === 2,
            })}>
            {React.cloneElement(technology.src)}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
