import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DepositComponent } from './deposit.component';
import { MatCardModule } from '@angular/material/card';
import { AddDepositComponent } from './add-deposit/add-deposit.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DepositService } from './shared/deposit.service';
import { MatDialogModule } from '@angular/material/dialog';

const routes: Routes = [
  {
    path: '',
    component: DepositComponent,
  },
];

@NgModule({
  declarations: [DepositComponent, AddDepositComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  providers: [DepositService],
})
export class DepositModule {
}
