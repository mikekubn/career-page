import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import { getCloudinaryUrl } from '@/lib/utils';
import Link from 'next/link';

const Header = (): React.ReactElement => (
  <div className="dark-mode sticky top-0 z-50">
    <header className="flex flex-1 flex-col h-28 mx-4 mt-2 md:mt-0 md:mx-24 md:flex-row ">
      <section className="flex flex-col flex-1">
        <div className="flex flex-row my-auto">
          <Image src="career_page/profile/profile_nv9lqo" width="50" height="50" className="rounded-full" />
          <h1 className="pl-4 text-lg font-semibold my-auto cursor-default">Michael Kubín</h1>
        </div>
      </section>
      <section className="flex flex-1 flex-col justify-end">
        <div className="flex flex-row justify-start md:justify-end my-auto">
          {links.map((link) => (
            <button key={link.src} className="ml-4 flex flex-col content-center">
              <Link href={link.url} passHref>
                <Image key={link.src} src={link.img} width="30" height="30" className="cursor-pointer" />
              </Link>
            </button>
          ))}
        </div>
        <Navigation />
      </section>
    </header>
    <div className="border-b" />
  </div>
);

export default Header;

const links: { name: string; src: string; url: string; img: string }[] = [
  {
    name: 'GitHub',
    src: 'github',
    url: `${process.env.NEXT_PUBLIC_GITHUB}`,
    img: getCloudinaryUrl('assets/github_gygqzz.png'),
  },
  {
    name: 'LinkedIn',
    src: 'linkedin',
    url: `${process.env.NEXT_PUBLIC_LINKEDIN}`,
    img: getCloudinaryUrl('assets/linkedin_mgrtgk.png'),
  },
  {
    name: 'Twitter',
    src: 'twitter',
    url: `${process.env.NEXT_PUBLIC_TWITTER}`,
    img: getCloudinaryUrl('assets/twitter_qgwhdw.png'),
  },
];
