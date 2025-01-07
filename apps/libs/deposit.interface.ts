interface IDeposit {
  date: string;
  amount: number;
  currency: string;
  category: string;
}

export type Deposit = IDeposit;
