'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';

const Welcome = () => {
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
    <section className="flex flex-col justify-center items-center mx-auto my-12 font-sourceCodePro min-h-screen w-full">
      <motion.div
        className="flex flex-col items-center"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.8, delay: 0.2 } },
        }}>
        <div ref={ref} className="flex flex-col items-center text-center max-w-[328px] md:max-w-[650px]">
          <h2 className="text-[28px] md:text-[34px] font-bold mb-4">Michael Kubin</h2>
          <h3 className="text-[30px] md:text-[62px] mb-[18px] md:mb-10">Digital craftsman</h3>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center hover:underline underline-offset-4 md:underline-offset-8 text-[18px] md:text-[24px] text-blue mb-10 md:mb-20">
          Read blog
          <ArrowRight className="size-[24px]" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Welcome;
