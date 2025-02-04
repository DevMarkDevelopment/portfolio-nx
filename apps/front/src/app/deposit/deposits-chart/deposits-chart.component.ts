import { ChangeDetectorRef, Component, computed, effect, OnInit, signal } from '@angular/core';
import { DepositService } from '../shared/deposit.service';
import { Deposit } from '../../../../../libs/deposit.interface';

@Component({
  selector: 'app-deposits-chart',
  templateUrl: './deposits-chart.component.html',
  styleUrl: './deposits-chart.component.scss',
})
export class DepositsChartComponent implements OnInit {
  data: any;
  options: any;

  depositsSortedHistory = signal<Deposit[]>([]);
  dataMap = computed(() => this.getChartData(this.depositsSortedHistory()));

  themeEffect = effect(() => {
    if (this.dataMap()) {
      this.initChart();
    }
  });

  constructor(
    private cd: ChangeDetectorRef,
    private depositService: DepositService,
  ) {
  }

  ngOnInit() {
    this.getAndSortDeposits();
  }

  private getAndSortDeposits(): void {
    this.depositService.getDeposits().subscribe(deposits => {
      // @ts-ignore
      const sortedDeposits = deposits.sort((a, b) => new Date(a.date) - new Date(b.date));
      console.log(sortedDeposits);
      this.depositsSortedHistory.set(sortedDeposits);
    });
  }

  private initChart() {
    const textColor = '#d1c2cb';
    const textColorSecondary = '#d1c2cb';
    const surfaceBorder = '#d1c2cb';
    const datasetColor = '#00c241';

    this.data = {
      labels: Array.from(this.dataMap().keys()),
      datasets: [
        {
          label: 'Deposits',
          data: Array.from(this.dataMap().values()),
          fill: true,
          borderColor: datasetColor,
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.6,
      plugins: {
        legend: {
          labels: {
            color: textColor,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false,
          },
        },
      },
    };

    this.cd.markForCheck();
  }

  private getChartData(sortedDepositsHistory: Deposit[]): Map<string, number> {
    return sortedDepositsHistory.reduce((acc, { date, amount }) => {
      const formattedDate = new Date(date);
      const label = `${formattedDate.getMonth() + 1}.${formattedDate.getFullYear()}`;

      const previousValue = acc.size > 0 ? Array.from(acc.values()).pop() ?? 0 : 0;
      const newValue = (acc.get(label) ?? previousValue) + amount;

      acc.set(label, newValue);

      return acc;
    }, new Map<string, number>());
  }
}
