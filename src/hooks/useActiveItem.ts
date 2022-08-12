import { INavigation, menuItemConfig } from '@/configs/navigation';
import { useRouter } from 'next/router';

interface IMenuItems extends INavigation {
  active?: boolean;
}

const useActiveItem = () => {
  const { pathname } = useRouter();
  const breadcrumbs: IMenuItems[] = menuItemConfig
    .filter((item) => item.enabled)
    .filter((item) => item.level === 'breadcrumbs')
    .map((item) => {
      if (item.url === pathname) {
        return {
          ...item,
          active: true,
        };
      }
      return { ...item };
    });

  const items: IMenuItems[] = menuItemConfig
    .filter((item) => item.enabled)
    .filter((item) => item.level === 'main')
    .map((item) => {
      if (item.url === pathname) {
        return {
          ...item,
          active: true,
        };
      }
      return { ...item };
    });

  return {
    items,
    breadcrumbs,
  };
};

export { useActiveItem };
