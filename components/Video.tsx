'use client';

import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Video = () => {
  const ref = React.useRef<HTMLVideoElement>(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <motion.video
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay: 0.1 } },
      }}
      width="1000"
      height="557"
      loop
      preload="auto"
      muted
      autoPlay={true}
      playsInline={true}
      className="rounded-[20px]">
      <source src="https://res.cloudinary.com/dctc6iyms/video/upload/v1727121296/akcenta_d3wrqm.mp4" type="video/mp4" />
    </motion.video>
  );
};

export default Video;
