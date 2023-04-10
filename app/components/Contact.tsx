'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SectionLeft } from './Sections';
import Image from 'next/image';
import { H2 } from './Typography';

const Contact = (): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="contact" ref={ref} className="flex flex-col items-center justify-center min-h-screen">
      <SectionLeft isInView={isInView}>
        <H2 font="bold" className="gradient-text-animate mb-8 pb-2">
          Ping me!
        </H2>
      </SectionLeft>
      <SectionLeft isInView={isInView} className="flex flex-col md:flex-row flex-wrap justify-center gap-10 items-center">
        {items.map((item, index) => (
          <div key={index}>
            <a href={item.link} target="_blank">
              <Image height={60} width={60} quality={100} loading="eager" src={item.image} alt={item.title} />
            </a>
          </div>
        ))}
      </SectionLeft>
    </section>
  );
};

export default Contact;

const items = [
  {
    title: 'LinkeIn',
    link: 'https://www.linkedin.com/in/michael-kubin-b48019121/',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1658562059/career_page/assets/linkedin_mgrtgk.png',
  },
  {
    title: 'GitHub',
    link: 'https://github.com/mikekubn',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1681156380/github.512x499_hsazbb.png',
  },
  {
    title: 'Twitter',
    link: 'https://twitter.com/mikekubn',
    image: 'https://res.cloudinary.com/dctc6iyms/image/upload/v1658562059/career_page/assets/twitter_qgwhdw.png',
  },
];
