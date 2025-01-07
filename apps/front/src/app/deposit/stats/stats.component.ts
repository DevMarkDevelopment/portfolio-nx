import { Component, computed, OnInit, signal, WritableSignal } from '@angular/core';
import { DepositService } from '../shared/deposit.service';
import { Deposit } from '../../../../../libs/deposit.interface';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.scss',
})
export class StatsComponent implements OnInit {
  readonly deposits: WritableSignal<Deposit[]> = signal([]);

  readonly sumOfDeposits = computed(() => this.calculateSum());
  readonly firstDeposit = computed(() => this.findDepositDate('earliest'));
  readonly lastDeposit = computed(() => this.findDepositDate('latest'));
  readonly averageDeposit = computed(() => this.calculateAverage());
  readonly biggestDeposit = computed(() => this.findExtremeAmount('max'));
  readonly lowestDeposit = computed(() => this.findExtremeAmount('min'));

  readonly statsData = [{
    title: 'Total deposit',
    data: this.sumOfDeposits,
  }, {
    title: 'First Deposit',
    data: this.firstDeposit,
  }, {
    title: 'Last deposit',
    data: this.lastDeposit,
  }, {
    title: 'Biggest deposit',
    data: this.biggestDeposit,
  }, {
    title: 'Lowest deposit',
    data: this.lowestDeposit,
  }, {
    title: 'Average deposit',
    data: this.averageDeposit,
  }];

  constructor(private depositService: DepositService) {
  }

  ngOnInit(): void {
    this.depositService.getDeposits().subscribe(deposits => {
      this.deposits.set(deposits);
    });
  }

  private calculateSum(): number {
    const deposits = this.deposits();
    return deposits ? deposits.reduce((acc, { amount }) => acc + amount, 0) : 0;
  }

  private calculateAverage(): number {
    const deposits = this.deposits();
    return deposits ? Math.round(this.calculateSum() / deposits.length) : 0;
  }

  private findDepositDate(type: 'earliest' | 'latest'): string {
    const deposits = this.deposits();
    if (!deposits) return '';

    const validDeposits = deposits.filter(({ date }) => !isNaN(new Date(date).getTime()));
    if (validDeposits.length === 0) return '';

    const date = new Date(validDeposits.reduce((acc, curr) => {
      const accDate = new Date(acc.date).getTime();
      const currDate = new Date(curr.date).getTime();
      return (type === 'earliest' ? currDate < accDate : currDate > accDate) ? curr : acc;
    }).date);

    return date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear();
  }

  private findExtremeAmount(type: 'max' | 'min'): number | null {
    const deposits = this.deposits();
    if (!deposits) return null;

    return deposits.reduce((acc, { amount }) => {
      return type === 'max' ? Math.max(acc, amount) : Math.min(acc, amount);
    }, type === 'max' ? 0 : Infinity);
  }
}
