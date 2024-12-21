import { AfterViewInit, Component, OnInit, signal, ViewChild } from '@angular/core';
import { DepositService } from '../shared/deposit.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-show-deposits',
  templateUrl: './show-deposits.component.html',
  styleUrl: './show-deposits.component.scss',
})
export class ShowDepositsComponent implements OnInit, AfterViewInit {
  depositsHistory = signal<any>([]);
  displayedColumns: string[] = ['date', 'currency', 'amount', 'category'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource(this.depositsHistory());

  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private depositService: DepositService) {
  }

  ngOnInit() {
    this.depositService.getDeposits().subscribe(deposits => {
      this.depositsHistory.set(deposits);
      this.dataSource.data = deposits;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

  }
}
