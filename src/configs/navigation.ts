export const hrefs = {
  home: 'home',
  contact: 'contact',
};

export interface INavigation {
  name: string;
  url: string;
}

export const navigation: INavigation[] = [{ name: 'Contact', url: '#contact' }];
