import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit.component';
import { MatCardModule } from '@angular/material/card';
import { AddDepositComponent } from './add-deposit/add-deposit.component';

const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
  },
  {
    path: 'addDeposit',
    component: AddDepositComponent,
  },
];

@NgModule({
  declarations: [DepositComponent, AddDepositComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatCardModule],
})
export class DepositModule {}
