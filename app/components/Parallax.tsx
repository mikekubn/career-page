'use client';

import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Image from 'next/image';

const CustomParallax = (): React.ReactElement => {
  return (
    <section className="flex flex-col justify-center items-center gap-10">
      <ParallaxProvider>
        <div className="flex flex-row gap-36">
          <Parallax translateY={['-0%', '0%']}>
            <div className="relative object-fill size-20">
              <Image
                fill={true}
                quality={100}
                loading="eager"
                src="https://res.cloudinary.com/dctc6iyms/image/upload/v1654714100/career_page/technology/javascript_ueiiqu.png"
                alt="javascript"
              />
            </div>
          </Parallax>
          <Parallax translateY={['-20%', '20%']}>
            <div className="relative object-fill size-20">
              <Image
                fill={true}
                quality={100}
                loading="eager"
                src="https://res.cloudinary.com/dctc6iyms/image/upload/v1654713907/career_page/technology/framer_fczleu.png"
                alt="framer"
              />
            </div>
          </Parallax>
        </div>
        <div className="flex flex-row gap-20">
          <Parallax translateY={['-30%', '30%']}>
            <div className="relative object-fill size-20">
              <Image
                fill={true}
                quality={100}
                loading="eager"
                src="https://res.cloudinary.com/dctc6iyms/image/upload/v1654713907/career_page/technology/react_tyt44v.png"
                alt="react"
              />
            </div>
          </Parallax>
          <Parallax translateY={['0%', '0%']}>
            <div className="relative object-fill size-20">
              <Image
                fill={true}
                quality={100}
                loading="eager"
                src="https://res.cloudinary.com/dctc6iyms/image/upload/v1654713907/career_page/technology/typescript_vgre2a.png"
                alt="typescript"
              />
            </div>
          </Parallax>
        </div>
        <Parallax translateY={['-20%', '20%']}>
          <div className="relative object-fill size-20">
            <Image
              fill={true}
              quality={100}
              loading="eager"
              src="https://res.cloudinary.com/dctc6iyms/image/upload/v1654713907/career_page/technology/node-js_lrlper.png"
              alt="nodejs"
            />
          </div>
        </Parallax>
      </ParallaxProvider>
    </section>
  );
};

export default CustomParallax;
