'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Intro: React.FC<{ title: string }> = ({ title }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -400px 0px' });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className="font-sourceCodePro font-normal flex flex-col md:flex-row text-center md:text-start items-center justify-between mb-6">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
        }}
        className="text-[52px]">
        {title}
      </motion.h1>
      <div className="max-w-[286px] md:max-w-[370px] flex flex-1 flex-row justify-end">
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
          }}
          className="text-[28px] md:text-[34px] leading-tight">
          I&apos;m a software engineer &amp; digital craftsman
        </motion.h1>
      </div>
    </div>
  );
};

export default Intro;
