import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DepositService {
  private url = 'http://localhost:3000/api/deposit';

  constructor(private http: HttpClient) {
  }

  saveDeposit(deposit: any): Observable<any> {

    return this.http.post(`${this.url}`, { ...deposit, category: 'frontTest' });
  }
}
