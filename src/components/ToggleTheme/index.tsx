import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { getCloudinaryUrl } from '@/lib/utils';
import { clsx } from 'clsx';

const ToggleTheme = ({ className }: { className: string }): React.ReactElement => {
  const { theme, setTheme, systemTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  React.useEffect(() => {
    if (systemTheme) {
      setTheme(systemTheme);
    }
  }, [systemTheme]);

  return (
    <label
      htmlFor="checked-toggle"
      className={clsx({ [styles.base]: true, [styles.dark]: theme === 'dark', [styles.light]: theme == 'light' }, [className])}
      onClick={handleClick}>
      <motion.div className="w-6 h-6 rounded-full bg-white flex p-0.5" layout transition={spring}>
        {theme === 'dark' ? (
          <Image src={getCloudinaryUrl('assets/moon_pomwuu.png')} width="24" height="24" />
        ) : (
          <Image src={getCloudinaryUrl('assets/sun_gpqllo.png')} width="24" height="24" />
        )}
      </motion.div>
    </label>
  );
};

export default ToggleTheme;

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 25,
};

const styles = {
  base: 'w-14 h-8 cursor-pointer p-1 flex bg-gradient-to-b from-blue rounded-full',
  dark: 'justify-end bg-black',
  light: 'justify-start bg-white',
};
