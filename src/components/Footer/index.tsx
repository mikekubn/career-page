import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getCloudinaryUrl } from '@/lib/utils';

const jobs: { name: string; src: string; url: string; img: string }[] = [
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
    {jobs.map((val) => (
      <Link key={val.name} href={val.url} passHref>
        <a target="_blank" rel="noreferrer">
          <div className="p-4 flex-row-center-content">
            <Image
              data-cy={val.src}
              src={val.img}
              width={28}
              height={28}
              alt={val.name}
            />
            <p className="ml-3">{val.name}</p>
          </div>
        </a>
      </Link>
    ))}
  </footer>
);

export default Footer;
