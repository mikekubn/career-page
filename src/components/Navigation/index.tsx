import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCloudinaryUrl } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useActiveItem } from '@/hooks/useActiveItem';
import { clsx } from 'clsx';
import ToggleTheme from '../ToggleTheme';
import { useOutsideClick } from '@/hooks/useOutsideClick';

const Navigation = (): React.ReactElement => {
  const { items } = useActiveItem();
  const [toggle, setToggle] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  useOutsideClick({ ref, callback: () => setToggle(false) });

  return (
    <nav className="flex flex-wrap items-center justify-between">
      <div className={clsx({ [styles.nav_list]: true, [styles.nav_list_active]: toggle })} ref={ref}>
        <div className="w-screen lg:hidden">
          <button
            data-cy={`toggle-menu-${toggle}`}
            className="flex flex-row justify-start cursor-pointer lg:hidden ml-3 lg:mt-0"
            onClick={() => setToggle(!toggle)}>
            <Image src={getCloudinaryUrl('assets/menu_bbe3tl.png')} width="38" height="38" alt="open" />
          </button>
        </div>
        <motion.div layout className={clsx({ [styles.nav_base]: true, flex: toggle, hidden: !toggle })}>
          <ul className="flex flex-1 flex-col lg:flex-row items-center">
            {items.map((item, index) => (
              <li data-cy="navigation-item" key={index} className="ml-0 mb-6 lg:ml-8 lg:first:m-0 lg:mb-0">
                <Link href={item.url} passHref replace>
                  <button value={item.name} className={clsx({ [styles.base]: true, [styles.active]: item.active })} onClick={() => setToggle(false)}>
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
            <ToggleTheme className="lg:hidden" />
          </ul>
        </motion.div>
        <ToggleTheme className="hidden lg:flex" />
      </div>
    </nav>
  );
};

export default Navigation;

const styles = {
  base: 'mb-2 text-xl lg:text-lg font-medium cursor-pointer hover:underline underline-offset-8',
  mobile_base: 'my-4 first:mt-20 hover:text-2xl',
  active: 'border-b-2 border-blue',
  nav_base: 'lg:flex flex-grow items-center',
  nav_list: 'lg:container lg:px-4 mx-auto flex flex-wrap items-center justify-between w-11/12 rounded-xl lg:bg-transparent',
  nav_list_active: 'bg-black text-white dark:bg-white dark:text-black pb-14',
};
