import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getCloudinaryUrl } from '@/lib/utils';
import { useScroll } from '@/hooks/useScroll';

const BackToTop = (): React.ReactElement | null => {
  const { num } = useScroll();

  if (num > 200) {
    return (
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 0.5 }}
        className="p-2 cursor-pointer w-full fixed flex justify-end md:justify-center bg-blue lg:justify-center bottom-20 z-50">
        <button data-cy="back-to-top" className="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110">
          <Image src={getCloudinaryUrl('assets/top-arrow_xchybv.png')} height="30" width="30" onClick={() => window.scrollTo(0, 0)} alt="Arrow top" />
        </button>
      </motion.div>
    );
  }

  return null;
};

export default BackToTop;
