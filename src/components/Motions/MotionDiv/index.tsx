import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQueries } from '@react-hook/media-query';

const MotionDiv = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const { matches: isMobile } = useMediaQueries({
    screen: 'screen',
    width: '(max-width: 400px)',
  });

  if (!isMobile.width) {
    return (
      <motion.div
        initial={{ y: '-100vh', opacity: 0 }}
        animate={{
          y: '0vh',
          opacity: 1,
          transition: {
            duration: 1, type: 'tween',
          },
        }}
        exit={{ y: '100vh', opacity: 0 }}
        className="flex flex-1"
      >
        {children}

      </motion.div>
    );
  }

  return (
    <div className="flex flex-1">
      {children}
    </div>
  );
};

export default MotionDiv;
