import { DepositCategory } from './deposit.entity';

export class DepositDto {
  currency: string;

  amount: number;

  date: string;

  category: DepositCategory;
}
