export const hrefs = {
  home: 'home',
  contact: 'contact',
};

export interface INavigation {
  name: string;
  url: string;
}

export const menuItemConfig: INavigation[] = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Experience', url: '/experience' },
];
