import React from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface IImageTooltop {
  root: string,
  alt: string,
  tooltip: string,
  positon: string,
  rtl?: boolean,
}

const ImageTooltip = ({
  root, alt, tooltip, positon, rtl,
}: IImageTooltop): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();
  const controls = useAnimation();

  React.useEffect(() => {
    if (visible) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, visible]);

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        className={`flex-col-1 ${positon} m-6`}
        animate={controls}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <motion.img
          data-testid="image-tooltip-img"
          key={`/img/${root}`}
          src={`/img/${root}.png`}
          height="60"
          width="60"
          alt={alt}
          variants={rtl ? fadeInRight : fadeInLeft}
        />
        <motion.p
          data-testid="image-tooltip-tooltip"
          className="mt-2 text-xs mx-auto sm:text-sm md:text-sm lg:text-sm"
          variants={rtl ? fadeInLeft : fadeInRight}
        >
          {tooltip}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageTooltip;

const fadeInRight = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: -50,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

const fadeInLeft = {
  hidden: {
    scale: 0.5,
    opacity: 0,
    x: 50,
  },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};
