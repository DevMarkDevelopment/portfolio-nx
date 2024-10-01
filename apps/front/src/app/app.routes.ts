import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'deposit',
    loadChildren: () =>
      import('./deposit/deposit.module').then((m) => m.DepositModule),
  },
];
