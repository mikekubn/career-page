import React from 'react';
import { useInView } from 'framer-motion';
import Image from 'next/image';
import { H4, ParagrapExtrahLarge, ParagraphBase } from '../Typography';
import { IExperience } from '@/lib/types';
import { getCloudinaryUrl } from '@/lib/utils';

const Card = ({ item }: { item: IExperience['frontmatter'] }): React.ReactElement => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="flex flex-col flex-1 md:mx-auto w-full lg:w-[750px]"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: '0.3s ease-in',
      }}>
      <span className="absolute w-11 h-11 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full">
        <Image alt={item.image} src={getCloudinaryUrl({ url: item.image, prefix: '/' })} height="62" width="62" className="rounded-full" />
      </span>
      <div className="flex flex-col items-end">
        <section className="pt-2 p-6 mb-10 rounded-xl w-11/12 lg:w-[670px] bg-blue/50">
          <div className="text-start">
            <ParagraphBase className="text-sm font-normal">
              From: {item.from} {item.to && `To: ${item.to}`}
            </ParagraphBase>
            <H4>{item.title}</H4>
            <ParagraphBase className="pt-1 pb-2">{item.where}</ParagraphBase>
            <ParagrapExtrahLarge className="pb-4">{item.position}</ParagrapExtrahLarge>
          </div>
          <ul>
            {item.description.map((text, index) => (
              <li key={index} className="list-disc font-light leading-loose py-1">
                <ParagraphBase>{text}</ParagraphBase>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Card;
