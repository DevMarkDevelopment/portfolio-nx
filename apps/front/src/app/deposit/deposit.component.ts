import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDepositComponent } from './add-deposit/add-deposit.component';

@Component({
  selector: 'app-deposit',
  standalone: false,
  templateUrl: './deposit.component.html',
  styleUrl: './deposit.component.scss',
})
export class DepositComponent {
  constructor(private dialogService: MatDialog) {
  }

  addDeposit() {
    this.dialogService.open(AddDepositComponent);

  }
}
