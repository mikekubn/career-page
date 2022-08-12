import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const RunningScrollBar = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <motion.div
      data-cy="running-scroll-bar"
      className="h-2 z-50 top-32 fixed inset-x-0 origin-left mx-2 md:mx-8 lg:mx-10 xl:mx-16 bg-blue rounded-full"
      style={{ scaleX }}
    />
  );
};

export default RunningScrollBar;
