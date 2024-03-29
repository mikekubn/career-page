'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import { useScrollIntoView } from 'app/hooks/useScrollToView';
import Link from 'next/link';
import { H5, ParagraphLarge } from './Typography';
import { usePathname, useRouter } from 'next/navigation';

const Navigation = (): React.ReactElement => (
  <header className="top-0 sticky z-50 block bg-black opacity-80">
    <div className="max-w-6xl flex flex-row justify-between mx-auto p-4 sm:px-6">
      <Link href="/">
        <H5 font="bold" className="text-light-blue hover:text-blue hover:underline hover:underline-offset-2">
          mikekubn.cz
        </H5>
      </Link>
      <DesktopItems />
      <MobileItems />
    </div>
    <div className="h-[1px] w-full bg-light-blue/60" />
  </header>
);

export default Navigation;

const DesktopItems = (): React.ReactElement => {
  const { scroll } = useScrollIntoView();
  const pathname = usePathname();
  const router = useRouter();

  const handleClickRedirect = React.useCallback(
    (id: string) => {
      if (pathname !== '/' && id === 'cooperation') {
        router.push('/cooperation');
      } else {
        scroll(id);
      }
    },
    [pathname, router, scroll],
  );

  return (
    <div className="hidden md:flex gap-4">
      {items.map((item, index) => (
        <button key={index} onClick={(): void => handleClickRedirect(item?.id)}>
          <ParagraphLarge font="bold" className={styles.link}>
            {item.title}
          </ParagraphLarge>
        </button>
      ))}
    </div>
  );
};

const MobileItems = (): React.ReactElement => {
  const { scroll } = useScrollIntoView();
  const pathname = usePathname();
  const router = useRouter();

  const handleClickRedirect = React.useCallback(
    (id: string) => {
      if (pathname !== '/' && id === 'cooperation') {
        router.push('/cooperation');
      } else {
        scroll(id);
      }
    },
    [pathname, router, scroll],
  );

  return (
    <div className="flex md:hidden">
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="inline-flex focus:outline-none">
          <H5 font="bold" className={styles.link}>
            menu
          </H5>
        </Menu.Button>
        <Menu.Items className="absolute flex flex-col gap-y-4 items-start w-64 origin-top-right right-0 mt-2 pl-4 py-2 bg-black opacity-90 focus:outline-none">
          {items.map((item, index) => (
            <Menu.Item key={index} as="button" onClick={(): void => handleClickRedirect(item?.id)}>
              <ParagraphLarge font="regular" className={styles.link}>
                {item?.title}
              </ParagraphLarge>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};

const styles = {
  link: 'text-light-blue hover:text-blue hover:underline hover:underline-offset-2',
};

const items = [
  { id: 'cooperation', title: 'Cooperation' },
  { id: 'contact', title: 'Ping me' },
];
