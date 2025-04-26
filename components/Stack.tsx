'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactComponent as ReactSvg } from '@/public/technologies/react.svg';
import { ReactComponent as NextJsSvg } from '@/public/technologies/next-js.svg';
import { ReactComponent as TypeScriptSvg } from '@/public/technologies/ts.svg';
import { ReactComponent as TailwindCssSvg } from '@/public/technologies/tailwind.svg';
import { ReactComponent as VercelSvg } from '@/public/technologies/vercel.svg';
import { ReactComponent as DigitalOceanSvg } from '@/public/technologies/digitalocean.svg';
import { ReactComponent as PrismaSvg } from '@/public/technologies/prisma.svg';
import { ReactComponent as StrapiSvg } from '@/public/technologies/strapi.svg';
import { ReactComponent as ReactNativeFirebaseSvg } from '@/public/technologies/react-native-firebase.svg';
import clsx from 'clsx';

const technologies = [
  { title: 'React', src: <ReactSvg className="size-[50px] md:size-[60px]" /> },
  { title: 'Next.js', src: <NextJsSvg className="size-[50px] md:size-[60px]" /> },
  { title: 'TypeScript', src: <TypeScriptSvg className="size-[50px] md:size-[60px]" /> },
  { title: 'Tailwind CSS', src: <TailwindCssSvg className="size-[50px] md:size-[60px]" /> },
  { title: 'React Native Firebase', src: <ReactNativeFirebaseSvg className="size-[50px] md:size-[60px]" /> },
  { title: 'DigitalOcean', src: <DigitalOceanSvg className="size-[90px] md:size-[120px]" /> },
  { title: 'Vercel', src: <VercelSvg className="h-[80px] w-[140px] md:h-[80px] md:w-[160px]" /> },
  { title: 'Prisma', src: <PrismaSvg className="h-[80px] w-[140px] md:h-[80px] md:w-[160px]" /> },
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
        className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-2 place-items-center justify-center md:w-[720px] lg:w-[960px] mx-auto"
        style={{ gridAutoRows: 'minmax(100px, auto)' }}>
        {technologies.map((technology, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={staggerAnimation}
            className={clsx('relative object-fill', { 'col-span-2 md:col-span-1': index === 8 })}>
            {React.cloneElement(technology.src)}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
