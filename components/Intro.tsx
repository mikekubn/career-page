'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Intro: React.FC<{ title: string; isArrowVisible?: boolean }> = ({ title, isArrowVisible = false }) => {
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
    <div ref={ref} className="h-screen font-sourceCodePro font-normal flex flex-col items-center justify-center">
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
        }}
        className="text-[52px] mb-20">
        {title}
      </motion.h1>
      <motion.h1
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.1 } },
        }}
        className="text-[1.75rem] md:text-[2.125rem] text-center lg:motion-preset-typewriter-[44] lg:motion-duration-[16s] lg:motion-loop-twice">
        I&apos;m a software engineer &amp; digital craftsman
      </motion.h1>

      {isArrowVisible && (
        <div className="mt-20 motion-translate-y-loop-100/reset motion-duration-[0.75s] text-[2.125rem] motion-ease-in-cubic">↓</div>
      )}
    </div>
  );
};

export default Intro;
