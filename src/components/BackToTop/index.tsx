import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useScroll } from '@/hooks/index';

const BackToTop = (): React.ReactElement | null => {
  const { num } = useScroll();

  if (num > 200) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 0.5 }}
        className="p-2 cursor-pointer w-full fixed flex justify-end md:justify-center lg:justify-center bottom-20"
      >
        <button
          data-cy="back-to-top"
          className="flex items-center justify-center w-10 h-10 bg-sky500/50 rounded-full hover:scale-110">
          <Image src="/img/top-arrow.png" height="30" width="30" onClick={() => window.scrollTo(0, 0)} alt="Arrow top" />
        </button>
      </motion.div>
    );
  }

  return (
    null
  );
};

export default BackToTop;
