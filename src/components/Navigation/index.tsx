import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menuItemConfig } from 'src/configs/navigation';
import { getCloudinaryUrl } from '@/lib/utils';
import { motion } from 'framer-motion';

const Navigation = (): React.ReactElement => (
  <nav data-cy="navigation" className="flex flex-row  w-34 justify-end">
    <ul className="flex flex-row">
      {menuItemConfig.map((nav, index) => (
        <button key={index}>
          <Link href={nav.url} passHref>
            <li className="mb-2 mx-4 text-lg cursor-pointer hover:underline underline-offset-8">{nav.name}</li>
          </Link>
        </button>
      ))}
    </ul>
  </nav>
);

export const MobileNavigaiton = (): React.ReactElement => {
  const [toggle, setToggle] = React.useState<boolean>(false);

  return (
    <>
      <button className="flex flex-col justify-center items-center cursor-pointer" onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <Image src={getCloudinaryUrl('assets/close_tukfuc.png')} width="38" height="38" />
        ) : (
          <Image src={getCloudinaryUrl('assets/menu_bbe3tl.png')} width="38" height="38" />
        )}
      </button>
      <MobileNavigationList
        value={toggle}
        children={
          <ul className="flex flex-col flex-1 items-center text-xl">
            {menuItemConfig.map((nav, index) => (
              <button key={index} className="my-4 first:mt-20 hover:text-2xl" onClick={() => setToggle(false)}>
                <Link href={nav.url} replace passHref>
                  <li>{nav.name}</li>
                </Link>
              </button>
            ))}
          </ul>
        }
      />
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
