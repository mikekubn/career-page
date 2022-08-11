import { INavigation, menuItemConfig } from '@/configs/navigation';
import { useRouter } from 'next/router';
import React from 'react';

interface IMenuItems extends INavigation {
  active?: boolean;
}

const useActiveItem = () => {
  const { route } = useRouter();
  const [, setActiveItem] = React.useState<string>();

  const callback = ({ url }: { url: string }) => setActiveItem(url);

  const menuItems: IMenuItems[] = menuItemConfig.map((item) => {
    if (item.url === route) {
      return {
        ...item,
        active: true,
      };
    }
    return { ...item };
  });

  return {
    items: menuItems,
    callback,
  };
};

export { useActiveItem };
