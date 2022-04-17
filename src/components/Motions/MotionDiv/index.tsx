import React from 'react';
import { motion } from 'framer-motion';

const MotionDiv = ({ children }: { children: React.ReactNode }): React.ReactElement => (
  <motion.div
    initial={{ y: '-100vh', opacity: 0 }}
    animate={{
      y: '0vh',
      opacity: 1,
      transition: {
        duration: 0.8, type: 'tween',
      },
    }}
    exit={{ y: '100vh', opacity: 0 }}
    className="flex flex-1"
  >
    {children}

  </motion.div>
);

export default MotionDiv;
