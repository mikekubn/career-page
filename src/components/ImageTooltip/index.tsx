import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/useIntersection';

interface IImageTooltop {
  root: string,
  height: string,
  width: string,
  alt: string,
  tooltip: string,
  positon: string,
}

const ImageTooltip = ({
  root, height, width, alt, tooltip, positon,
}: IImageTooltop): React.ReactElement => {
  const { visible, add: [ref] } = useIntersection();

  const imageAnimate = {
    start: {
      x: [-10, 0, -10],
      y: [-10, 0, -10],
      scale: 1.1,
    },
    end: {
      x: [-10, 0, -10],
      y: [-10, 0, -10],
      scale: 0.5,
    },
  };

  return (
    <motion.div
      animate={visible ? 'start' : 'end'}
      variants={imageAnimate}
      transition={{ duration: 0.7 }}
      ref={ref}
      className={`flex flex-col ${positon} m-7`}
    >
      <Image className="dark:opacity-50" src={`/img/${root}.png`} height={height} width={width} alt={alt} priority />
      <p className="mt-2">{tooltip}</p>
    </motion.div>
  );
};

export default ImageTooltip;
