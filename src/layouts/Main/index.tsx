import React from 'react';
import { useRealHeight } from '@/hooks/useRealHeight';
import Metadata, { IMetadata } from '@/components/Metadata';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { firstLetterToUpperCase, urlPathnameSanity } from '@/lib/utils';

const Main = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { height } = useRealHeight();
  const title = 'Michael Kubin';
  const { pathname } = useRouter();

  const description = firstLetterToUpperCase(urlPathnameSanity(pathname));

  const metadata: IMetadata = {
    title,
    description,
    url: pathname,
  };

  return (
    <main className={'container block mx-auto mb-auto'} style={{ minHeight: `${height}px` }}>
      <Metadata metadata={metadata} />
      <AnimatePresence exitBeforeEnter>
        <motion.div initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: 'linear', duration: 0.3 }}>
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
