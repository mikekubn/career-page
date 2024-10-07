'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

const customers = [
  { title: 'Siemens', image: '/customers/siemens.svg' },
  { title: 'Onsemi', image: '/customers/onsemi.svg' },
  { title: 'Livesport', image: '/customers/livesport.svg' },
  { title: 'Webscope', image: '/customers/webscope.svg' },
  { title: 'Wattstor', image: '/customers/wattstor.svg' },
  { title: 'MetaIT', image: '/customers/metait.svg' },
  { title: 'Akcenta', image: '/customers/akcenta.svg' },
  { title: 'Direct', image: '/customers/direct.svg' },
];

const staggerAnimation = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.4,
      ease: 'easeOut',
    },
  }),
};

const Clients: React.FC<{ className?: string; title: string }> = ({ className, title }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const clientRef = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const isClientsInView = useInView(clientRef, { once: true, margin: '0px 0px -100px 0px' });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  React.useEffect(() => {
    if (isClientsInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isClientsInView]);

  return (
    <section className={clsx('h-fit w-full flex flex-col justify-center items-center text-center gap-4 md:gap-8', className)}>
      <motion.h5
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5, delay: 0.3 } },
        }}
        ref={ref}
        className="font-semibold font-beVietnamPro text-[28px] md:text-[44px]">
        {title}
      </motion.h5>
      <section className="my-7 md:my-20">
        <section ref={clientRef} className="flex">
          <div className="dark:hidden flex flex-row flex-wrap justify-center items-center max-w-[865px] gap-8 md:gap-x-16 md:gap-y-10">
            {customers?.map((customer, index) => (
              <motion.div
                key={index}
                className="relative w-[136px] h-[46px]"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={staggerAnimation}>
                <Image
                  fill
                  key={index}
                  className="object-contain"
                  quality={100}
                  src={customer?.image}
                  alt={customer?.title}
                  title={customer?.title}
                />
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Clients;
