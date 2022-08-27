import { sidebarItem } from '../interface';

export const SIDEBAR_ITEMS: sidebarItem[] = [
  {
    index: 1,
    title: 'All Articles',
    link: '/articles/list',
    exactOption: true,
    linkActiveClass: 'active',
  },
  {
    index: 2,
    title: 'New Article',
    link: '/articles/create',
    exactOption: false,
    linkActiveClass: 'active',
  },
];
