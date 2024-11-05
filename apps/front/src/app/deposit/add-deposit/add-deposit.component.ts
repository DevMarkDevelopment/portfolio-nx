import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepositService } from '../shared/deposit.service';
import { MatDialogRef } from '@angular/material/dialog';

interface ICurrencyTypes {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-deposit',
  standalone: false,
  templateUrl: './add-deposit.component.html',
  styleUrl: './add-deposit.component.scss',
})
export class AddDepositComponent {
  depositGroup = new FormGroup({
    currency: new FormControl('', [Validators.required]),
    amount: new FormControl(null, [Validators.required]),
    date: new FormControl(null, [Validators.required]),
  });
  currencyTypes: ICurrencyTypes[] = [
    { value: 'pln', viewValue: 'Polish złoty (PLN)' },
    { value: 'eur', viewValue: 'Euro (EUR)' },
    { value: 'usd', viewValue: 'Dollar (USD)' },
  ];

  constructor(private depositService: DepositService, private dialogRef: MatDialogRef<AddDepositComponent>) {
  }

  addFunds() {
    this.depositService.saveDeposit(this.depositGroup.getRawValue()).subscribe(deposit => {
      this.dialogRef.close(deposit);
    });
  }

  canselAddingFunds() {
    this.depositGroup.reset();
    this.dialogRef.close();
  }
}
