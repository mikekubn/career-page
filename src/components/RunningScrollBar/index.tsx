import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const RunningScrollBar = (): React.ReactElement => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  return <motion.div className="h-3 top-32 fixed z-30 left-0 right-0 mx-2 md:mx-8 lg:mx-10 xl:mx-16 bg-blue rounded-full" style={{ scaleX }} />;
};

export default RunningScrollBar;
