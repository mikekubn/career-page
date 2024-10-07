'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useAnimation, useInView } from 'framer-motion';
import clsx from 'clsx';

const Talk: React.FC<{ className: string }> = ({ className }) => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
      }}
      className={clsx('flex flex-col items-center font-sourceCodePro', className)}>
      <h4 className="text-center text-[28px] md:text-[44px] font-beVietnamPro font-semibold mb-3 md:mb-6">Ready for a Conversation?</h4>
      <Link
        href="https://www.linkedin.com/in/michael-kubin-b48019121/"
        target="_blank"
        className="inline-flex items-center hover:underline underline-offset-8 text-[18px] md:text-[24px] text-blue">
        LinkedIn
        <ArrowRight className="size-[24px]" />
      </Link>
    </motion.section>
  );
};

export default Talk;
