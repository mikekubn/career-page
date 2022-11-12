import React from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { H1, H2, Paragraph, Time } from '../Typography';
import { IExperience } from '@/lib/types';
import { getCloudinaryUrl } from '@/lib/utils';

const Card = ({ item }: { item: IExperience['frontmatter'] }): React.ReactElement => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex flex-col mx-auto w-11/12 sm:w-[400px] md:w-[650px] lg:w-[750px]"
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateX(-200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
      }}>
      <span className="absolute w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
        <Image alt={item.image} src={getCloudinaryUrl({ url: item.image, prefix: '/' })} height="62" width="62" className="rounded-full" />
      </span>
      <div className="flex flex-col items-end">
        <section className="pt-2 p-6 mb-10 rounded-xl w-10/12 sm:w-[330px] md:w-[570px] lg:w-[670px] bg-blue/50">
          <div className="text-start">
            <Time className="text-sm font-normal">
              From: {item.from} {item.to && `To: ${item.to}`}
            </Time>
            <H1>{item.title}</H1>
            <Paragraph className="pt-1 pb-2">{item.where}</Paragraph>
            <H2 className="pb-4">{item.position}</H2>
          </div>
          <ul>
            {item.description.map((text, index) => (
              <li key={index} className="list-disc font-light leading-loose py-1">
                <Paragraph>{text}</Paragraph>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Card;
