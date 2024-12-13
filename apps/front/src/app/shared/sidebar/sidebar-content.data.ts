import { ISidebarContent } from './sidebar-content.interface';

export const SidebarContentData: ISidebarContent[] =
  [{
    parent: {
      title: 'Fiat operations',
      icon: 'home',
      children: [{
        name: 'Deposit money',
        icon: 'close',
        routerLink: '/deposit',
      }, {
        name: 'Withdraw money',
        icon: 'home',
      }],
    },
  }, {
    parent: {
      title: 'Cryptocurrencies (TODO)',
      icon: 'home',
      children: [{
        name: 'Add transaction',
        icon: 'add',
      }, {
        name: 'Delete transaction',
        icon: 'delete',
      }],
    },
  }];
