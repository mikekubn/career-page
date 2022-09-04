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
  childrens?: {
    name: string;
    url: string;
  }[];
}

export const menuItemConfig: INavigation[] = [
  { enabled: true, level: 'main', name: 'Home', url: '/' },
  { enabled: true, level: 'main', name: 'About', url: '/about' },
  {
    enabled: true,
    level: 'main',
    name: 'Blog',
    url: '/blog',
    childrens: [
      {
        name: 'Next.js import and resize SVG in styled components',
        url: '/nextjs-styledcomponents-svg-resize',
      },
      { name: 'How use npm link in pnpm overwrites', url: '/pnpm-npm-link-overwrites' },
    ],
  },
  { enabled: true, level: 'main', name: 'Contact', url: '/contact' },
];
