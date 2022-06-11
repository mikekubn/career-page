import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl } from '@/lib/utils';

const links: { name: string; src: string; url: string; img: string }[] = [
  {
    name: 'GitHub',
    src: 'github',
    url: `${process.env.NEXT_PUBLIC_GITHUB}`,
    img: getCloudinaryUrl('assets/github_cco9xx.png'),
  },
  {
    name: 'LinkedIn',
    src: 'linkedin',
    url: `${process.env.NEXT_PUBLIC_LINKEDIN}`,
    img: getCloudinaryUrl('assets/linkedin_chtb6f.png'),
  },
];

const Footer = (): React.ReactElement => (
  <footer className="border-t footer h-14 border-sky500/20 shadow-sky500/50">
    {links.map((val) => (
      <Link key={val.name} href={val.url} passHref>
        <a target="_blank" rel="noreferrer" className="hover:text-black hover:dark:text-white">
          <div className="p-4 flex-row-center-content hover:bg-sky500/5 rounded-4xl">
            <Image data-cy={val.src} src={val.img} width={28} height={28} alt={val.name} />
            <p className="ml-3">{val.name}</p>
          </div>
        </a>
      </Link>
    ))}
  </footer>
);

export default Footer;
