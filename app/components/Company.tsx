'use client';

import { H2, H5, ParagraphLarge } from './Typography';
import Image from 'next/image';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useWindowResize } from 'app/hooks/useResize';

const Cooperation = (): React.ReactElement => {
  const [elWidth, setElWidth] = React.useState(0);
  const [isClient, setIsClient] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const { width } = useWindowResize();
  const isMobile = width <= 500;
  const isTable = width <= 800 && !isMobile;
  const getScrollingPercentage = () => {
    if (isMobile) return ['5%', '-90%'];
    else if (isTable) return ['20%', '-95%'];
    else return ['10', '-50%'];
  };
  const x = useTransform(scrollYProgress, [0, 1], getScrollingPercentage());

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (width !== 0) {
      if (isMobile) {
        setElWidth(width - 60);
      } else if (isTable) {
        setElWidth(600);
      } else {
        setElWidth(700);
      }
    }
  }, [isMobile, isTable, width]);

  return (
    <section ref={ref} className="relative w-screen h-[300vh]">
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {isClient ? (
            items.map((item, index) => (
              <div
                id="cooperation"
                key={index}
                style={{ width: elWidth }}
                className="group bg-white h-[400px] md:h-[300px] rounded-3xl p-4 md:p-6 flex flex-1 flex-col">
                <div className="inline-flex justify-between h-[30%]">
                  <div className="flex flex-col gap-2">
                    <H2 font="bold" className="gradient-text-animate">
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.title}
                      </a>
                    </H2>
                    <H5 font="light" className="text-light-blue">
                      {item.position}
                    </H5>
                  </div>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <div className="relative size-[52px] md:size-[62px]">
                      <Image fill quality={100} loading="eager" src={item.image} alt={item.title} className="rounded-full" />
                    </div>
                  </a>
                </div>
                <div className="flex flex-col justify-center h-[70%]">
                  <ParagraphLarge font="light" className="text-light-black">
                    {item.description}
                  </ParagraphLarge>
                </div>
              </div>
            ))
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Cooperation;

const items = [
  {
    title: 'Akcenta',
    position: 'Frontend Lead Developer',
    link: 'https://www.akcenta.digital',
    description:
      'The beginning of the digitization of one of the biggest players in the financial market with currencies. Akcenta is Central Europe’s largest payment institution with more than 46,000, primarily B2B, clients.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1706208102/career_page/work/akcenta_digital_y7lhrf.jpg',
  },
  {
    title: 'Webscope.io',
    position: 'React senior developer',
    link: 'https://www.webscope.io',
    description:
      'Passionate about website development, app development, design, and the newest technologies we continuously deliver outstanding software solutions to our clients for over 5 years.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1654804211/career_page/work/webscope_wiypoc.jpg',
  },
  {
    title: 'Arc',
    position: 'Arc Certified Remote Developer',
    link: 'https://arc.dev/@mikekubn',
    description: 'Cooperation with foreign clients around the world on interesting projects',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681497169/1652413115342_bjmpnr.jpg',
  },
  {
    title: 'Livesport TV',
    position: 'React developer & QA tester',
    link: 'https://www.livesport.eu',
    description:
      'Media services platform development for Livesport, that is the largest supplier of results from the world of sports in the world. You may know them from the Super Bowl. We developed SPA in React and other smaller landing websites.',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1654895632/career_page/work/livesporttv_eks746.jpg',
  },
];
