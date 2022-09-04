import React from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { H1, H2, Paragraph, Time } from '../Typography';
import { IExperience } from '@/lib/types';

const Card = ({ children, title }: { title: string; children: React.ReactNode }): React.ReactElement => {
  const countOfRing = new Array(5).fill('ring');

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-72 h-[390px] md:w-[350px] md:h-[520px] lg:h-[500px] mt-14 md:mt-16 md:mx-5 lg:mt-20 lg:w-96 xl:w-96 xl:mx-20 border-b border-black shadow-black shadow-lg p-4 bg-sky500/50 rounded-lg overflow-auto">
      <div className="flex flex-row justify-center mt-2">
        {countOfRing.map((index) => {
          return <div key={`${Math.random() + index}`} className="rounded-full border border-black p-2 w-4 mx-2 dark-mode" />;
        })}
      </div>
      <h1 className="text-xl mt-3 sm:mt-3 md:mt-6 font-light mb-2">{title}</h1>
      <div className="border-b border-black mb-1 md:mb-4" />
      {children}
    </motion.div>
  );
};

const MiniCard = ({ item }: { item: IExperience['frontmatter'] }): React.ReactElement => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative mx-auto">
      <span className="flex absolute justify-center items-center w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
        <Image alt={item.image} src={item.image} height="62" width="62" className="rounded-full" />
      </span>
      <section className="pt-2 p-6 lg:pt-4 lg:p-8 rounded-xl">
        <Time className="text-sm font-normal">
          From: {item.from} {item.to && `To: ${item.to}`}
        </Time>
        <H1>{item.title}</H1>
        <Paragraph className="pt-1 pb-2">{item.where}</Paragraph>
        <H2 className="pb-4">{item.position}</H2>
        <ul>
          {item.description.map((text, index) => (
            <li key={index} className="list-disc font-light leading-loose">
              <Paragraph>{text}</Paragraph>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export { MiniCard };
export default Card;
