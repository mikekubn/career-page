'use client';

import { useScrollIntoView } from 'app/hooks/useScrollToView';
import { motion } from 'framer-motion';
import { ButtonWithGradient } from './Button';
import TextLoop from './Textloop';
import { H1, ParagraphLarge } from './Typography';

const Intro = (): React.ReactElement => {
  const { scroll } = useScrollIntoView();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, ease: 'easeIn' }}
      className="flex flex-col flex-1 justify-center items-center text-center min-h-screen mb-10 md:mb-0">
      <H1 font="bold" className="gradient-text-animate mb-14">
        Michael Kubin
      </H1>
      <TextLoop className="w-full h-14 mb-14" texts={['Software engineer', 'Creative', 'QA tester', 'Lead', 'Freelancer']} />
      <ButtonWithGradient className="h-14 w-48" id="know-me" onClick={() => scroll('who-i-am')}>
        <ParagraphLarge font="bold" className="gradient-blue-text">
          Know me.
        </ParagraphLarge>
      </ButtonWithGradient>
    </motion.section>
  );
};

export default Intro;
