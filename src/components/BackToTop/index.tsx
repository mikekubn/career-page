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
          scale: [1, 1.5, 1],
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.2 }}
        transition={{ duration: 0.5 }}
        className="p-2 cursor-pointer w-full fixed flex justify-end md:justify-center lg:justify-center bottom-20"
      >
        <Image src="/img/top-arrow.png" height="40" width="40" onClick={() => window.scrollTo(0, 0)} alt="Arrow top" />
      </motion.div>
    );
  }

  return (
    null
  );
};

export default BackToTop;
