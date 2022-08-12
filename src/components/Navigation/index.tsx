import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useActiveItem } from '@/hooks/useActiveItem';

const Navigation = (): React.ReactElement => {
  const { items } = useActiveItem();

  return (
    <nav data-cy="navigation" className="flex flex-row justify-end">
      <ul className="flex flex-row">
        {items.map((item, index) => (
          <li key={index} className="ml-8">
            <Link href={item.url} passHref replace>
              <button className={`mb-2 text-lg cursor-pointer hover:underline underline-offset-8 ${item.active && 'border-b-2 border-sky500/50'}`}>
                {item.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavigaiton = (): React.ReactElement => {
  const { items } = useActiveItem();
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <>
      <button className="flex flex-col justify-center items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <Image src={getCloudinaryUrl('assets/close_tukfuc.png')} width="38" height="38" alt="close" />
        ) : (
          <Image src={getCloudinaryUrl('assets/menu_bbe3tl.png')} width="38" height="38" alt="open" />
        )}
      </button>
      <MobileNavigationList value={toggle}>
        <ul className="flex flex-col flex-1 items-center text-xl">
          {items.map((item, index) => (
            <button
              key={index}
              className={`my-4 first:mt-20 hover:text-2xl ${item.active ? 'border-b-2 border-sky500/50' : ''}`}
              onClick={() => {
                setToggle(false);
              }}>
              <Link href={item.url} replace passHref>
                <li>{item.name}</li>
              </Link>
            </button>
          ))}
        </ul>
      </MobileNavigationList>
    </>
  );
};

const MobileNavigationList = ({ value, children }: { value: boolean; children: React.ReactNode }): React.ReactElement | null => {
  if (value) {
    return (
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="z-50 absolute flex-1 flex left-0 top-28 w-full h-screen dark-mode">
        {children}
      </motion.div>
    );
  }

  return null;
};

export default Navigation;
