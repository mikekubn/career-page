'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IArticleProps } from '@/type';
import { motion } from 'framer-motion';

const Teaser: React.FC<IArticleProps> = ({ metadata, slug }) => {
  const [onHover, setOnHover] = React.useState(false);

  return (
    <Link
      href={`/blog/${slug}`}
      title={metadata?.title}
      className="rounded-[2px] md:rounded-[30px]"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}>
      <div className="flex flex-col justify-between size-[280px] md:size-[380px] bg-black-darkest rounded-[22px] md:rounded-[30px] group border-[0.5px] border-white">
        <div className="h-[150px] md:h-[210px] flex flex-col justify-between px-4 md:px-8 pt-4 md:pt-8 rounded-t-[22px] md:rounded-t-[30px]">
          <h4 className="font-beVietnamPro font-medium text-white text-[20px] md:text-[26px] leading-tight group-hover:opacity-90 line-clamp-3">
            {metadata?.title}
          </h4>
          <p className="text-[14px] md:text-[18px] font-inter font-medium text-blue mb-4 md:mb-8">{metadata?.date}</p>
        </div>
        <div className="relative w-full h-[120px] md:h-[160px] rounded-b-[22px] md:rounded-b-[30px] overflow-hidden">
          <motion.div animate={{ scale: onHover ? 1.05 : 1 }} transition={{ duration: 0.3 }} className="absolute inset-0">
            <Image
              fill
              src={metadata?.image}
              title={metadata?.title}
              alt={metadata?.title}
              className="object-cover rounded-b-[22px] md:rounded-b-[30px]"
            />
          </motion.div>
        </div>
      </div>
    </Link>
  );
};

export default Teaser;
