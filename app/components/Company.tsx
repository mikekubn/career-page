'use client';

import { H2, ParagraphLarge } from './Typography';
import Image from 'next/image';
import { SectionLeft } from './Sections';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import clsx from 'clsx';

const Cooperation = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="flex min-h-screen w-full mb-16 md:mb-0">
      <SectionLeft isInView={isInView} className="flex flex-row flex-wrap justify-center gap-10">
        {items.map((item, index) => (
          <div id="cooperation" key={index} className="bg-light-blue/5 w-full lg:w-[45%] rounded-3xl p-8">
            <div className="flex flex-row flex-wrap items-center justify-between mb-8">
              <H2 font="bold" className="gradient-blue-text pb-2 hover:to-purple pr-4">
                <a href={item.link} target="_blank">
                  {item.title}
                </a>
              </H2>
              <a href={item.link} target="_blank">
                <Image
                  height={81}
                  width={62}
                  quality={100}
                  loading="eager"
                  src={item.image}
                  alt={item.title}
                  className={clsx({ 'relative object-cover': item.title === 'akcenta.digital', 'rounded-full': item.title !== 'akcenta.digital' })}
                />
              </a>
            </div>
            <ParagraphLarge font="light">{item.description}</ParagraphLarge>
          </div>
        ))}
      </SectionLeft>
    </section>
  );
};

export default Cooperation;

const items = [
  {
    title: 'Akcenta',
    link: 'https://www.akcenta.digital',
    description:
      'The beginning of the digitization of one of the biggest players in the financial market with currencies. Akcenta is Central Europe’s largest payment institution with more than 46,000, primarily B2B, clients.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1668274406/career_page/work/akcenta_aj5lpk.png',
  },
  {
    title: 'Webscope.io',
    link: 'https://www.webscope.io',
    description:
      'Passionate about website development, app development, design, and the newest technologies we continuously deliver outstanding software solutions to our clients for over 5 years.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1654804211/career_page/work/webscope_wiypoc.jpg',
  },
  {
    title: 'Livesport TV',
    link: 'https://www.livesport.eu',
    description:
      'Media services platform development for Livesport, that is the largest supplier of results from the world of sports in the world. You may know them from the Super Bowl. We developed SPA in React and other smaller landing websites.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1654895632/career_page/work/livesporttv_eks746.jpg',
  },
];
