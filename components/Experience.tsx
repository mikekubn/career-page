'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const experiences = [
  {
    position: 'Javascript Developer',
    company: 'Livesport',
    note: 'Media services platform development for Livesport, that is the largest supplier of results from the world of sports in the world. You may know them from the Super Bowl. We developed SPA in React and other smaller landing websites.',
  },
  {
    position: 'Senior React Developer',
    company: 'Webscope.io',
    note: 'Passionate about website development, app development, design, and the newest technologies we continuously deliver outstanding software solutions to our clients for over 5 years.',
  },
  {
    position: 'External consultant',
    company: 'Wattstor',
    note: 'Developed and implemented a robust QA environment to streamline testing processes, significantly enhancing the reliability and performance of the application. Improved the frontend infrastructure to optimize load times and user experience while implementing best practices for code quality.',
  },
  {
    position: 'Head of Frontend Development',
    company: 'Akcenta',
    note: 'The beginning of the digitization of one of the biggest players in the financial market with currencies. Akcenta is Central Europe’s largest payment institution with more than 46,000, primarily B2B, clients.',
  },
  {
    position: 'External consultant',
    company: 'MetaIT',
    note: 'I collaborated with the frontend React team to enhance code quality through best practices and code reviews. I provided guidance and training sessions to promote learning within the team.',
  },
  {
    position: 'Senior Frontend Developer & Architect',
    company: 'Direct',
    note: 'I collaborated on the development of a new frontend infrastructure, focusing on code optimization and enhancing the performance of the application. I implemented CMS optimization strategies to improve content management efficiency.',
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
    <div ref={ref} className="flex flex-col items-start justify-center min-h-screen my-12">
      {reversArr?.map((exp, index) => (
        <motion.ul className="my-6 list-disc" key={index} custom={index} initial="hidden" animate={controls} variants={roleVariants}>
          <li className="font-sourceCodePro text-[18px] md:text-[24px] list-none pl-0">{exp.position}</li>
          <li className="font-beVietnamPro text-[24px] md:text-[28px] ml-4">{exp.company}</li>
          <li className="font-inter text-[16px] md:text-[18px] mt-4 font-extralight list-none ml-4">{exp.note}</li>
        </motion.ul>
      ))}
    </div>
  );
};

export default Experience;
