'use client';

import * as React from 'react';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { H2 } from './Typography';

interface ITextLoopProps {
  texts: string[];
  className?: string;
}

const TextLoop = ({ texts, className }: ITextLoopProps): React.ReactElement => {
  const [index, setIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      const next = index + 1;
      setIndex(next % texts.length);
    }, 3 * 1000);
  }, [index, setIndex, texts]);

  return (
    <section className={clsx('inline-flex justify-center overflow-hidden relative', className)}>
      <AnimatePresence initial={false}>
        <motion.span
          className="absolute"
          key={index}
          layout
          variants={{
            enter: {
              translateY: 20,
              opacity: 0,
              height: 0,
            },
            center: {
              zIndex: 1,
              translateY: 0,
              opacity: 1,
              height: 'auto',
            },
            exit: {
              zIndex: 0,
              translateY: -20,
              opacity: 0,
              height: 0,
            },
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            translateY: { type: 'spring', stiffness: 1000, damping: 200 },
            opacity: { duration: 0.5 },
          }}>
          <H2 font="regular">{texts[index]}</H2>
        </motion.span>
      </AnimatePresence>
    </section>
  );
};

export default TextLoop;
