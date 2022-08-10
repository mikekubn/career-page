import React from 'react';
import { motion } from 'framer-motion';

interface IProps extends React.RefAttributes<HTMLButtonElement> {
  title?: string;
}

const AnimatedButton: React.FC<IProps> = React.forwardRef((props, ref) => {
  return (
    <motion.button
      ref={ref}
      style={{ borderRadius: '9px' }}
      whileHover={{ scale: 1.05, borderRadius: '75px', backgroundColor: '#0ea5e9' }}
      className="bg-sky500/50 px-2 py-1 font-thin text-sm shadow-md shadow-black">
      {props?.title}
    </motion.button>
  );
});

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
