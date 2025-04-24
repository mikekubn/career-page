'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    position: 'Javascript Developer',
    company: 'Livesport',
    note: 'Media platform development for Livesport, the world’s top sports results provider.',
    logo: '/customers/livesport.svg',
  },
  {
    position: 'Senior React Developer',
    company: 'Webscope.io',
    note: 'Building web and app solutions with cutting-edge tech.',
    logo: '/customers/webscope.svg',
  },
  {
    position: 'External consultant',
    company: 'Wattstor',
    note: 'Enhanced QA processes and improved frontend infrastructure for better performance and reliability.',
    logo: '/customers/wattstor.svg',
  },
  {
    position: 'Head of Frontend Development',
    company: 'Akcenta',
    note: 'Led the digitalization launch for Akcenta, a top financial player in Central Europe.',
    logo: '/customers/akcenta.svg',
  },
  {
    position: 'External consultant',
    company: 'MetaIT',
    note: 'Led code reviews and team training to improve frontend quality.',
    logo: '/customers/metait.svg',
  },
  {
    position: 'Software Developer',
    company: 'Direct',
    note: 'Improved app performance & streamlined CMS.',
    logo: '/customers/direct.svg',
  },
];

const Experience = (): React.ReactElement => {
  const ref = React.useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });
  const reversArr = experiences.slice().reverse();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const roleVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.4,
      },
    }),
  };

  return (
    <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-8">
      {reversArr?.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={roleVariants}
          className="flex flex-col gap-2 w-full max-w-[300px] h-[280px] md:h-[340px] border border-white rounded-3xl p-4 text-center">
          <div className="flex w-full flex-row justify-center">
            <div className="relative w-[136px] h-[46px]">
              <Image fill key={index} className="object-contain" quality={100} src={item.logo} alt={item?.company} title={item?.company} />
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <p className="font-sourceCodePro text-[18px] md:text-[24px]">{item.position}</p>
            <div className="flex flex-1 flex-col justify-center">
              <p className="font-inter text-[16px] md:text-[18px] font-extralight">{item.note}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Experience;
