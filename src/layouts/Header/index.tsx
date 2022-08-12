import React from 'react';
import Image from 'next/image';
import Navigation, { MobileNavigaiton } from '@/components/Navigation';
import { getCloudinaryUrl } from '@/lib/utils';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useTheme } from 'next-themes';
import { H1, Paragraph } from '@/components/Typography';

const Header = (): React.ReactElement => {
  const { isMobile } = useWindowSize();
  const { theme, setTheme, systemTheme } = useTheme();
  const [clientTheme, setClientTheme] = React.useState<string>('');
  const isLight = theme === 'light' ? 'dark' : 'light';

  const handleClick = () => {
    setTheme(isLight);
  };

  React.useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme, setTheme]);

  React.useEffect(() => {
    if (theme) {
      setClientTheme(isLight);
    }
  }, [theme, setClientTheme, isLight]);

  return (
    <div className="dark-mode sticky top-0 z-20" id="header-content">
      <header className="flex flex-1 flex-col h-28 pt-2 md:mt-0 mx-4 md:mx-24 md:flex-row">
        <section className="flex flex-col flex-1">
          <div className="flex flex-row my-auto justify-between">
            <div className="flex">
              <Image src="career_page/profile/profile_nv9lqo" width="50" height="50" className="rounded-full" alt="header-profile-image" />
              <H1 className="pl-4 my-auto cursor-default">Michael Kubín</H1>
            </div>
            {isMobile && <MobileNavigaiton />}
          </div>
        </section>
        <section className="flex flex-1 flex-col justify-end">
          <div className="flex flex-row justify-center md:justify-end my-auto">
            <button
              data-cy="button-theme"
              className="md:ml-4 rounded-full w-28 h-8 shadow-md shadow-black dark:shadow-white flex flex-row justify-center hover:shadow-sm hover:shadow-black"
              onClick={handleClick}>
              <Paragraph className="p-1">{`Theme ${clientTheme}`}</Paragraph>
            </button>
            {links.map((link) => (
              <button key={link.src} className="ml-6 md:ml-4 flex flex-col content-center my-auto">
                <a href={link.url} target="_blank" rel="noreferrer">
                  <Image key={link.src} src={link.img} width="30" height="30" className="cursor-pointer" alt={link.name} />
                </a>
              </button>
            ))}
          </div>
          {!isMobile && <Navigation />}
        </section>
      </header>
      <div className="border-b rounded-full w-11/12 border-sky500/50 mx-auto mt-4" />
    </div>
  );
};

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
