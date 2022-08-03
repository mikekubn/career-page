import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, title }: { title: string; children: React.ReactNode }): React.ReactElement => {
  const countOfRing = new Array(5).fill('ring');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-80 h-[520px] mt-14 md:mt-16 lg:mt-20 lg:w-96 xl:w-96 xl:mx-20 border-b border-black shadow-black shadow-lg p-4 bg-sky500/50 rounded-lg overflow-auto">
      <div className="flex flex-row justify-center mt-2">
        {countOfRing.map((index) => {
          return <div key={`${Math.random() + index}`} className="rounded-full border-2 border-black p-2 w-4 mx-2 dark-mode" />;
        })}
      </div>
      <h1 className="text-xl mt-6 font-light mb-2">{title}</h1>
      <div className="border-b border-black mb-4" />
      {children}
    </motion.div>
  );
};

export default Card;
