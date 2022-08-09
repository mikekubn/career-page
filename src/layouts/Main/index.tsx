import React from 'react';
import { useRealHeight } from '@/hooks/useRealHeight';
import Metadata from '@/components/Metadata';
import { motion, AnimatePresence } from 'framer-motion';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { height } = useRealHeight();

  return (
    <main className={'container block mx-auto mb-auto'} style={{ minHeight: `${height}px` }}>
      <Metadata />
      <AnimatePresence exitBeforeEnter>
        <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: 'linear', duration: 0.5 }}>
          {children}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Main;

const variants = {
  hidden: { opacity: 0, x: -300, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 300, y: 0 },
};
