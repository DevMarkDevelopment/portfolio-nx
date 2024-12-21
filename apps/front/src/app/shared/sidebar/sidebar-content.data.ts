import { ISidebarContent } from './sidebar-content.interface';

export const SidebarContentData: ISidebarContent[] =
  [{
    parent: {
      title: 'Fiat operations',
      icon: 'payments',
      children: [{
        name: 'Deposit money',
        icon: 'attach_money',
        routerLink: '/deposit',
      }, {
        name: 'Withdraw money',
        icon: 'money_off',
      }, {
        name: 'Show deposits',
        icon: 'history',
        routerLink: '/deposit/showDepositHistory',
      }],
    },
  }, {
    parent: {
      title: 'Cryptocurrencies (TODO)',
      icon: 'currency_bitcoin',
      children: [{
        name: 'Add transaction',
        icon: 'add',
      }, {
        name: 'Delete transaction',
        icon: 'delete',
      }],
    },
  }];
