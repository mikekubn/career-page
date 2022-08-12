export const hrefs = {
  home: 'home',
  contact: 'contact',
};

type TLevel = 'main' | 'breadcrumbs';
export interface INavigation {
  enabled: boolean;
  level: TLevel;
  name: string;
  url: string;
}

export const menuItemConfig: INavigation[] = [
  { enabled: true, level: 'main', name: 'Home', url: '/' },
  { enabled: true, level: 'main', name: 'Blog', url: '/blog' },
  { enabled: true, level: 'main', name: 'Experience', url: '/experience' },
];
